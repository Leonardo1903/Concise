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
    try {
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
        const updatedTag = await prisma.tag.update({
            where: {
                id: tagId,
                ownerId: user.id
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

    } catch (error) {
        const apiError = new ApiError(500, 'Internal Server Error')
        return c.json(apiError, 500)
    }
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

