import { Hono } from 'hono'
import { verifyJWT } from '../middlewares/auth.middleware'
import { createTag, getTags, updateTag, deleteTag } from '../controllers/tag.controller'

const tagRouter = new Hono()

tagRouter.use(verifyJWT)

tagRouter.get('/get', getTags)
tagRouter.post('/create', createTag)
tagRouter.put('/:id', updateTag)
tagRouter.delete('/:id', deleteTag)

export default tagRouter