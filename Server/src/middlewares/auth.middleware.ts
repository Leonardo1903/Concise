import type { Context, Next } from 'hono'
import { getCookie } from 'hono/cookie'
import { verify } from 'hono/jwt'
import { getPrismaClient } from '../utils/prisma'
import ApiError from '../utils/apiError'
import asyncHandler from '../utils/asyncHandler'

export const verifyJWT = asyncHandler(async (c: Context, next?: Next) => {
  try {
    const accessToken = 
      getCookie(c, 'auth_token') || 
      c.req.header('Authorization')?.replace('Bearer ', '')

    if (!accessToken) {
      const error = new ApiError(401, 'Unauthorized request')
      return c.json(error, 401)
    }

    const jwtSecret = c.env?.JWT_SECRET
    
    const decodedToken = await verify(accessToken, jwtSecret)

    const prisma = getPrismaClient(c.env?.DATABASE_URL)
    
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId as string },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    if (!user) {
      const error = new ApiError(404, 'User does not exist')
      return c.json(error, 404)
    }

    // Attach user to context
    c.set('user', user)
    
    if (next) {
      await next()
    }
  } catch (error) {
    const apiError = new ApiError(
      401, 
      error instanceof Error ? error.message : 'Invalid token'
    )
    return c.json(apiError, 401)
  }
})