import type { Context, Next } from 'hono'

type HandlerFunction = (c: Context, next?: Next) => Promise<void>

const asyncHandler = (requestHandler: HandlerFunction) => {
  return async (c: Context, next?: Next) => {
    return Promise.resolve(requestHandler(c, next)).catch((error) => {
      throw error
    })
  }
}

export default asyncHandler