import { Hono } from 'hono'
import { loginUser, registerUser, logoutUser, getProfile } from '../controllers/user.controller'
import { verifyJWT } from '../middlewares/auth.middleware'

const userRouter = new Hono()

// Public routes
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

// Protected routes
userRouter.post('/logout', verifyJWT, logoutUser)
userRouter.get('/profile', verifyJWT, getProfile)

export default userRouter