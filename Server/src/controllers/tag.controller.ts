import type { Context } from 'hono'
import { getPrismaClient } from '../utils/prisma'
import ApiResponse from '../utils/apiResponse'
import ApiError from '../utils/apiError'
import asyncHandler from '../utils/asyncHandler'


export const createTag = asyncHandler(async (c: Context) => {
    const prisma = getPrismaClient(c.env?.DATABASE_URL)
    const user = c.get('user')
    const { name } = await c.req.json()
    
    if (!user) {
        const error = new ApiError(401, 'Unauthorized')
        return c.json(error, 401)
    }

    if (!name) {
        const error = new ApiError(400, 'Tag name is required')
        return c.json(error, 400)
    }

    try {
        const newTag = await prisma.tag.create({
            data: {
                name,
                ownerId: user.id
            }
        })

        const response = new ApiResponse(
            201,
            { tag: newTag },
            'Tag created successfully'
        )
        return c.json(response, 201)
    } catch (error: any) {

        if (error.code === 'P2002') {
            const apiError = new ApiError(409, 'Tag with this name already exists')
            return c.json(apiError, 409)
        }
        throw error
    }
})

export const getTags = asyncHandler(async (c: Context) => {
    const prisma = getPrismaClient(c.env?.DATABASE_URL)
    const user = c.get('user')
    if (!user) {
        const error = new ApiError(401, 'Unauthorized')
        return c.json(error, 401)
    }

    const tags = await prisma.tag.findMany({
        where: { ownerId: user.id }
    })

    const response = new ApiResponse(
        200,
        { tags },
        'Tags retrieved successfully'
    )
    return c.json(response, 200)
})

export const updateTag = asyncHandler(async (c: Context) => {
    const prisma = getPrismaClient(c.env?.DATABASE_URL)
    const user = c.get('user')
    const tagId = parseInt(c.req.param('id'))
    const { name } = await c.req.json()
    
    if (!user) {
        const error = new ApiError(401, 'Unauthorized')
        return c.json(error, 401)
    }
    if (isNaN(tagId)) {
        const error = new ApiError(400, 'Invalid tag ID')
        return c.json(error, 400)
    }
    if (!name) {
        const error = new ApiError(400, 'Tag name is required')
        return c.json(error, 400)
    }
    
    const existingTag = await prisma.tag.findFirst({
        where: {
            id: tagId,
            ownerId: user.id
        }
    })

    if (!existingTag) {
        const error = new ApiError(404, 'Tag not found')
        return c.json(error, 404)
    }

    const updatedTag = await prisma.tag.update({
        where: {
            id: tagId
        },
        data: {
            name
        }
    })
    
    const response = new ApiResponse(
        200,
        { tag: updatedTag },
        'Tag updated successfully'
    )
    return c.json(response, 200)
})

export const deleteTag = asyncHandler(async (c: Context) => {
    const prisma = getPrismaClient(c.env?.DATABASE_URL)
    const user = c.get('user')
    const tagId = parseInt(c.req.param('id'))
    if (!user) {
        const error = new ApiError(401, 'Unauthorized')
        return c.json(error, 401)
    }
    if (isNaN(tagId)) {
        const error = new ApiError(400, 'Invalid tag ID')
        return c.json(error, 400)
    }

    await prisma.tag.delete({
        where: {
            id: tagId,
            ownerId: user.id
        }
    })
    const response = new ApiResponse(
        200,
        null,
        'Tag deleted successfully'
    )
    return c.json(response, 200)
})

