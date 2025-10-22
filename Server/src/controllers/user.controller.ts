import type { Context } from 'hono'
import { sign } from 'hono/jwt'
import { scrypt } from '@noble/hashes/scrypt'
import { getPrismaClient } from '../utils/prisma'
import { setCookie } from 'hono/cookie'
import ApiResponse from '../utils/apiResponse'
import ApiError from '../utils/apiError'
import asyncHandler from '../utils/asyncHandler'

const hashPassword = (password: string): string => {
  const hash = scrypt(password, 'your-salt-change-this', { 
    N: 2**16, 
    r: 8, 
    p: 1, 
    dkLen: 32 
  })
  return Array.from(hash).map(b => b.toString(16).padStart(2, '0')).join('')
}

const verifyPassword = (password: string, hashedPassword: string): boolean => {
  return hashPassword(password) === hashedPassword
}

export const registerUser = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const { email, password, name } = await c.req.json()
  
  // Validate input
  if (!email || !password || !name) {
    const error = new ApiError(400, 'Missing required fields')
    return c.json(error, 400)
  }
  
  // Check if user exists
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    const error = new ApiError(400, 'User already exists')
    return c.json(error, 400)
  }
  
  // Hash password
  const hashedPassword = hashPassword(password)
  
  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  })
  
  // Generate JWT
  const jwtSecret = c.env?.JWT_SECRET 
  
  const token = await sign(
    { 
      userId: user.id, 
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 
    },
    jwtSecret
  )
  
  // Set cookie
  setCookie(c, 'auth_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 7, 
    path: '/',
  })
  
  const response = new ApiResponse(
    201,
    {
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name 
      }
    },
    'Registration successful'
  )
  
  return c.json(response, 201)
})

export const loginUser = asyncHandler(async (c: Context) => {
  const prisma = getPrismaClient(c.env?.DATABASE_URL)
  const { email, password } = await c.req.json()
  
  // Validate input
  if (!email || !password) {
    const error = new ApiError(400, 'Missing required fields')
    return c.json(error, 400)
  }
  
  // Find user
  const user = await prisma.user.findUnique({ where: { email } })
  
  if (!user) {
    const error = new ApiError(401, 'Invalid credentials')
    return c.json(error, 401)
  }
  
  // Verify password
  if (!verifyPassword(password, user.password)) {
    const error = new ApiError(401, 'Invalid credentials')
    return c.json(error, 401)
  }
  
  // Generate JWT
  const jwtSecret = c.env?.JWT_SECRET 
  
  const token = await sign(
    { 
      userId: user.id, 
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
    },
    jwtSecret
  )
  
  // Set cookie
  setCookie(c, 'auth_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  
  const response = new ApiResponse(
    200,
    {
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name 
      }
    },
    'Login successful'
  )
  
  return c.json(response, 200)
})

export const logoutUser = asyncHandler(async (c: Context) => {
  setCookie(c, 'auth_token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 0,
    path: '/',
  })
  
  const response = new ApiResponse(200, null, 'Logout successful')
  return c.json(response, 200)
})


export const getProfile = asyncHandler(async (c: Context) => {
  const user = c.get('user')
  
  const response = new ApiResponse(200, { user }, 'Profile retrieved successfully')
  return c.json(response, 200)
})