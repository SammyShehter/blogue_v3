import { Application, Router, oakCors } from './deps.ts'
import { PORT } from './utils/globals.ts'
import { loggerMiddleware, timingMiddleware } from './utils/helpers.ts'
import { CommonRoutes } from './routes/common/common.routes.ts'
import { PostRoutes } from './routes/posts/posts.route.ts'
import { log } from './utils/logger.ts'
// import {CategorieRoutes} from './categories/categories.route.ts'

const port: number = Number(PORT)
const app = new Application()
const router = new Router()
const routes: Array<CommonRoutes> = []

// middlewares
app.use(oakCors())
app.use(loggerMiddleware)
app.use(timingMiddleware)
app.use(router.routes())
app.use(router.allowedMethods())

// routes added here
routes.push(new PostRoutes(router))
// routes.push(new CategorieRoutes(router))

routes.forEach((route: CommonRoutes) => {
    console.log(`Route configured for ${route.getName()}`)
})

log.serviceStarted(port)

await app.listen({ port })
