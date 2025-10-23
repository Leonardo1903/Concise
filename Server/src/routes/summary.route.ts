import { Hono } from 'hono'
import { verifyJWT } from '../middlewares/auth.middleware'
import { createSummary, getSummaries,getSummaryById, deleteSummary } from '../controllers/summary.controller'

const summaryRouter = new Hono()

summaryRouter.use(verifyJWT)

summaryRouter.post('/generate', createSummary)
summaryRouter.get('/list', getSummaries)
summaryRouter.get('/:id', getSummaryById)
summaryRouter.delete('/:id', deleteSummary)


export default summaryRouter