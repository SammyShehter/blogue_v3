import { Router } from '../deps.ts'
import { CommonRoutes } from '../common/common.routes.ts'
import PostController from './posts.controller.ts'
import PostMiddleware from './posts.middleware.ts'

export class PostRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Post Routes')
    }

    configureRoutes() {
        //special route
        this.router.get('/', PostController.pong)

        //not so special route
        this.router.get('/posts', PostController.retrieveAllPosts)

        this.router.post(
            '/post',
            PostMiddleware.parseBody,
            PostMiddleware.inspectBody,
            PostController.createPost
        )
        this.router.get(
            '/post/:postId',
            PostMiddleware.inspectParam,
            PostController.getPost
        )

        return this.router
    }
}
