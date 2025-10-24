import { Hono } from 'hono'
import { cors } from 'hono/cors'
import userRouter from './routes/user.route'
import summaryRouter from './routes/summary.route'
import tagRouter from './routes/tag.route'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
}))

app.route('/api/v1/users', userRouter)
app.route('/api/v1/summaries', summaryRouter)
app.route('/api/v1/tags', tagRouter)


export default app