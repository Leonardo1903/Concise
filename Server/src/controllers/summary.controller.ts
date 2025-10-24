import type { Context } from 'hono'
import { getPrismaClient } from '../utils/prisma'
import ApiResponse from '../utils/apiResponse'
import ApiError from '../utils/apiError'
import asyncHandler from '../utils/asyncHandler'
import * as cheerio from 'cheerio'
import axios from 'axios'
import { GoogleGenerativeAI } from '@google/generative-ai'

const getGeminiClient = (apiKey: string) => {
  const genAI = new GoogleGenerativeAI(apiKey)
  return genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
}

const extractTextFromHTML = (html: string): string => {
  const $ = cheerio.load(html)
  
  // Remove script and style elements
  $('script, style, nav, footer, header').remove()
  
  // Get text content
  const text = $('body').text()
  
  // Clean up whitespace
  return text.replace(/\s+/g, ' ').trim()
}

const fetchArticleContent = async (url: string): Promise<string> => {
  const response = await axios.get(url)
  if (response.status !== 200) {
    throw new ApiError(400, `Failed to fetch article: ${response.statusText}`)
  }
  const html = response.data
  return extractTextFromHTML(html)
}

interface GenerationSettings {
  length?: 'Brief' | 'Standard' | 'Detailed'
  format?: 'Paragraph' | 'Bullet Points' | 'Key Takeaways'
  tone?: 'Professional' | 'Casual' | 'Academic'
}

const generateSummary = async (
  text: string, 
  apiKey: string, 
  settings: GenerationSettings = {}
): Promise<string> => {
  const model = getGeminiClient(apiKey)
  
  // Default settings
  const length = settings.length || 'Standard'
  const format = settings.format || 'Paragraph'
  const tone = settings.tone || 'Professional'
  
  // Build prompt based on settings
  let lengthInstruction = ''
  switch (length) {
    case 'Brief':
      lengthInstruction = 'Keep it concise, around 2-3 sentences.'
      break
    case 'Standard':
      lengthInstruction = 'Provide a moderate summary, around 4-6 sentences.'
      break
    case 'Detailed':
      lengthInstruction = 'Provide a comprehensive summary with detailed explanations.'
      break
  }
  
  let formatInstruction = ''
  switch (format) {
    case 'Paragraph':
      formatInstruction = 'Present the summary in paragraph form.'
      break
    case 'Bullet Points':
      formatInstruction = 'Present the summary as bullet points, highlighting key information.'
      break
    case 'Key Takeaways':
      formatInstruction = 'Present the summary as numbered key takeaways.'
      break
  }
  
  let toneInstruction = ''
  switch (tone) {
    case 'Professional':
      toneInstruction = 'Use a professional and formal tone.'
      break
    case 'Casual':
      toneInstruction = 'Use a casual and friendly tone.'
      break
    case 'Academic':
      toneInstruction = 'Use an academic and scholarly tone.'
      break
  }
  
  const prompt = `Please provide a summary of the following article. ${lengthInstruction} ${formatInstruction} ${toneInstruction} Focus on the main points and key takeaways.\n\nArticle:\n${text}`
  
  const result = await model.generateContent(prompt)
  const response = result.response
  return response.text()
}

export const createSummary = asyncHandler(async (c: Context) => {
  try {
    const prisma = getPrismaClient(c.env?.DATABASE_URL)
    const user = c.get('user')
    const apiKey = c.env?.GEMINI_API_KEY
    
    if (!user) {
      const error = new ApiError(401, 'Unauthorized')
      return c.json(error, 401)
    }
    
    if (!apiKey) {
      const error = new ApiError(500, 'API key not configured')
      return c.json(error, 500)
    }
    
    const { url, title, generationSettings, tagIds } = await c.req.json()
    
    if (!url) {
      const error = new ApiError(400, 'URL is required')
      return c.json(error, 400)
    }

    // Validate tagIds if provided
    if (tagIds && !Array.isArray(tagIds)) {
      const error = new ApiError(400, 'tagIds must be an array')
      return c.json(error, 400)
    }

    // Fetch and validate tags belong to user
    if (tagIds && tagIds.length > 0) {
      const tags = await prisma.tag.findMany({
        where: {
          id: { in: tagIds },
          ownerId: user.id
        }
      })
      
      if (tags.length !== tagIds.length) {
        const error = new ApiError(400, 'One or more tags not found or do not belong to you')
        return c.json(error, 400)
      }
    }
    
    const settings = generationSettings || {}
    
    // Fetch article content
    let articleText: string
    try {
      articleText = await fetchArticleContent(url)
    } catch (error) {
      const apiError = new ApiError(400, 'Failed to fetch article content. Please check the URL.')
      return c.json(apiError, 400)
    }
    
    // Generate summary using Gemini
    let summary: string
    try {
      summary = await generateSummary(articleText, apiKey, settings)
    } catch (error) {
      const apiError = new ApiError(500, 'Failed to generate summary')
      return c.json(apiError, 500)
    }
    
    // Save to database with tags
    const savedSummary = await prisma.summary.create({
      data: {
        originalUrl: url,
        title: title || 'Untitled',
        content: summary, 
        ownerId: user.id,
        generationSettings: settings,
        tags: tagIds && tagIds.length > 0 ? {
          connect: tagIds.map((id: number) => ({ id }))
        } : undefined
      },
      include: {
        tags: true
      }
    })
    
    const response = new ApiResponse(
      201,
      { summary: savedSummary },
      'Summary created successfully'
    )
    return c.json(response, 201)
    
  } catch (error) {
    console.error('Error in createSummary:', error)
    const apiError = new ApiError(500, 'Internal Server Error')
    return c.json(apiError, 500)
  }
})

export const addTagsToSummary = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const user = c.get('user')
  const summaryId = parseInt(c.req.param('id'))
  const { tagIds } = await c.req.json()

  if (!user) {
    const error = new ApiError(401, 'Unauthorized')
    return c.json(error, 401)
  }

  if (isNaN(summaryId)) {
    const error = new ApiError(400, 'Invalid summary ID')
    return c.json(error, 400)
  }

  if (!Array.isArray(tagIds) || tagIds.length === 0) {
    const error = new ApiError(400, 'Tag IDs array is required')
    return c.json(error, 400)
  }

  // Verify summary exists and belongs to user
  const summary = await prisma.summary.findUnique({
    where: { id: summaryId, ownerId: user.id }
  })

  if (!summary) {
    const error = new ApiError(404, 'Summary not found')
    return c.json(error, 404)
  }

  // Verify all tags exist and belong to user
  const tags = await prisma.tag.findMany({
    where: {
      id: { in: tagIds },
      ownerId: user.id
    }
  })

  if (tags.length !== tagIds.length) {
    const error = new ApiError(400, 'One or more tags not found or do not belong to you')
    return c.json(error, 400)
  }

  // Connect tags to summary
  const updatedSummary = await prisma.summary.update({
    where: { id: summaryId },
    data: {
      tags: {
        connect: tagIds.map(id => ({ id }))
      }
    },
    include: {
      tags: true
    }
  })

  const response = new ApiResponse(
    200,
    { summary: updatedSummary },
    'Tags added to summary successfully'
  )
  return c.json(response, 200)
})

export const removeTagsFromSummary = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const user = c.get('user')
  const summaryId = parseInt(c.req.param('id'))
  const { tagIds } = await c.req.json()

  if (!user) {
    const error = new ApiError(401, 'Unauthorized')
    return c.json(error, 401)
  }

  if (isNaN(summaryId)) {
    const error = new ApiError(400, 'Invalid summary ID')
    return c.json(error, 400)
  }

  if (!Array.isArray(tagIds) || tagIds.length === 0) {
    const error = new ApiError(400, 'Tag IDs array is required')
    return c.json(error, 400)
  }

  // Verify summary exists and belongs to user
  const summary = await prisma.summary.findUnique({
    where: { id: summaryId, ownerId: user.id }
  })

  if (!summary) {
    const error = new ApiError(404, 'Summary not found')
    return c.json(error, 404)
  }

  const updatedSummary = await prisma.summary.update({
    where: { id: summaryId },
    data: {
      tags: {
        disconnect: tagIds.map(id => ({ id }))
      }
    },
    include: {
      tags: true
    }
  })

  const response = new ApiResponse(
    200,
    { summary: updatedSummary },
    'Tags removed from summary successfully'
  )
  return c.json(response, 200)
})


export const getSummaries = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const user = c.get('user')

  if (!user) {
    const error = new ApiError(401, 'Unauthorized')
    return c.json(error, 401)
  }

  const summaries = await prisma.summary.findMany({
    where: {
      ownerId: user.id
    },
    include: {
      tags: true
    }
  })

  const response = new ApiResponse(
    200,
    { summaries },
    'Summaries retrieved successfully'
  )
  return c.json(response, 200)
})


export const getSummaryById = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const user = c.get('user')
  const summaryId = parseInt(c.req.param('id'))
  
  if (!user) {
    const error = new ApiError(401, 'Unauthorized')
    return c.json(error, 401)
  }
  
  if (isNaN(summaryId)) {
    const error = new ApiError(400, 'Invalid summary ID')
    return c.json(error, 400)
  }
  
  const summary = await prisma.summary.findUnique({
    where: {
      id: summaryId,
      ownerId: user.id
    },
    include: {
      tags: true
    }
  })

  if (!summary) {
    const error = new ApiError(404, 'Summary not found')
    return c.json(error, 404)
  }

  const response = new ApiResponse(
    200,
    { summary },
    'Summary retrieved successfully'
  )

  return c.json(response, 200)
})

export const deleteSummary = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const user = c.get('user')
  const summaryId = parseInt(c.req.param('id'))
  if (!user) {
    const error = new ApiError(401, 'Unauthorized')
    return c.json(error, 401)
  }
  if (isNaN(summaryId)) {
    const error = new ApiError(400, 'Invalid summary ID')
    return c.json(error, 400)
  }
  const summary = await prisma.summary.findUnique({
    where: {
      id: summaryId,
      ownerId: user.id
    }
  })

  if (!summary) {
    const error = new ApiError(404, 'Summary not found')
    return c.json(error, 404)
  }

  await prisma.summary.delete({
    where: {
      id: summaryId
    }
  })
  const response = new ApiResponse(
    200,
    null,
    'Summary deleted successfully'
  )
  return c.json(response, 200)
})
  