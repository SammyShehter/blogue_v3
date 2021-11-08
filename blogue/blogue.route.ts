import { Router } from '../deps.ts'
import CommonRoutes from '../common/common.routes.ts'
import BlogueControler from './blogue.controller.ts'

export class BlogueRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Blogue Routes')
    }

    configureRoutes() {
        this.router.get('/', BlogueControler.retrieveAllPosts)

        return this.router
    }
}
