import { Hono } from 'hono'
import { cors } from 'hono/cors'
import userRouter from './routes/user.routes'
import summaryRouter from './routes/summary.route'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
}))

app.route('/api/v1/users', userRouter)
app.route('/api/v1/summaries', summaryRouter)


export default app