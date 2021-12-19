import { Router } from '../../deps.ts'
import { CommonRoutes } from '../common/common.routes.ts'
import CommonMiddleware from '../common/common.middleware.ts'
import PostController from './posts.controller.ts'
import PostMiddleware from './posts.middleware.ts'

export class PostRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Post Routes')
        console.log('Created instace of PostRoutes')
    }

    configureRoutes() {
        // Special route
        this.router.get('/', PostController.pong)
        //
        //
        // GET
        //
        this.router.get('/posts', PostController.getAllPosts)

        this.router.get(
            '/post/:postSlug',
            PostMiddleware.inspectParam,
            PostController.getPost
        )
        //
        //
        // POST
        //
        this.router.post(
            '/post',
            CommonMiddleware.auth,
            PostMiddleware.parseBody,
            PostMiddleware.inspectBody,
            PostController.addPost
        )
        //
        //
        // PATCH
        //
        this.router.patch(
            '/post',
            CommonMiddleware.auth,
            PostMiddleware.parseBody,
            PostMiddleware.inspectBody,
            PostMiddleware.postExists,
            PostController.patchPost
        )
        //
        //
        // DELETE
        //
        this.router.delete(
            '/post',
            CommonMiddleware.auth,
            PostMiddleware.parseBody,
            PostMiddleware.inspectBody,
            PostMiddleware.postExists,
            PostController.deletePost
        )

        return this.router
    }
}
