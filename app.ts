import {Application, Router, oakCors} from './deps.ts'
import CommonMiddleware from './common/common.middleware.ts'
import CommonRoutes from './common/common.routes.ts'
import {BlogueRoutes} from './blogue/blogue.route.ts'

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
routes.push(new BlogueRoutes(router))

routes.forEach((route: CommonRoutes) => {
    console.log(`Route configured for ${route.getName()}`);
})
await app.listen({ port })
