import { Context } from '../types/context.type.ts'
import { handleSuccess, handleError } from '../common/common.functions.ts'
import PostService from './posts.service.ts'
class PostController {
    /**
     * ping
     */
    pong(ctx: Context) {
        const message = 'Welcome to Blogue_v3'
        handleSuccess(ctx, { message })
    }

    /**
     * returns all posts to the client
     */
    async getAllPosts(ctx: Context) {
        try {
            const response = await PostService.getAllPosts()
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * returns specific post to the client
     */
    async getPost(ctx: Context) {
        try {
            const response = await PostService.getPost(ctx.postId as string)
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * creates a new entry in DB
     */
    async addPost(ctx: Context) {
        try {
            const response = await PostService.addPost(ctx.body)
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * patches selected entry in DB
     */
     async patchPost(ctx: Context) {
        try {
            const response = await PostService.patchPost(ctx.body)
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }
}

export default new PostController()
