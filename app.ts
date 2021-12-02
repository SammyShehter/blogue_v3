import { Application, Router, oakCors } from './deps.ts'
import { CommonMiddleware } from './routes/common/common.middleware.ts'
import { CommonRoutes } from './routes/common/common.routes.ts'
import { PostRoutes } from './routes/posts/posts.route.ts'
// import {CategorieRoutes} from './categories/categories.route.ts'

const port = 8000
const app = new Application()
const router = new Router()
const routes: Array<CommonRoutes> = []

app.use(oakCors())
app.use(CommonMiddleware.loggerMiddleware)
app.use(CommonMiddleware.timingMiddleware)
app.use(router.routes())
app.use(router.allowedMethods())

// routes added here
routes.push(new PostRoutes(router))
// routes.push(new CategorieRoutes(router))

routes.forEach((route: CommonRoutes) => {
    console.log(`Route configured for ${route.getName()}`)
})

console.log(`Server is listening on port ${port}`)

await app.listen({ port })
