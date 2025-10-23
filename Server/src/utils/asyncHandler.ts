import type { Context, Next } from 'hono'

type HandlerFunction = (c: Context, next?: Next) => Promise<Response | void>

const asyncHandler = (fn: HandlerFunction) => {
  return async (c: Context, next?: Next): Promise<Response | void> => {
    try {
      return await fn(c, next)
    } catch (error) {
      throw error
    }
  }
}

export default asyncHandler