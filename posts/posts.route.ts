import { Router } from '../deps.ts'
import CommonRoutes from '../common/common.routes.ts'
import PostControler from './posts.controller.ts'

export class PostRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Post Routes')
    }

    configureRoutes() {
        this.router.get('/', PostControler.retrieveAllPosts)

        return this.router
    }
}
