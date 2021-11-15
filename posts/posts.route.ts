import { Router } from '../deps.ts'
import {CommonRoutes} from '../common/common.routes.ts'
import PostController from './posts.controller.ts'
import PostMiddleware from './posts.middleware.ts'

export class PostRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Post Routes')
    }

    configureRoutes() {

        this.router.get('/posts', PostController.retrieveAllPosts)
        this.router.get('/post/:postId', PostMiddleware.inspectParam, PostController.getPost)
        this.router.post('/post', PostController.createPost)

        return this.router
    }
}
