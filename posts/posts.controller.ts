import {Context} from '../types/context.type.ts'
import PostDao from './posts.dao.ts'
class PostController {
    /**
     * returns all posts to client
     */
    async retrieveAllPosts(ctx: Context) {
        try {
            ctx.response.body = await PostDao.getAllPosts()
        } catch (error) {
            console.log(error);
        }
    }

    getPost(ctx: Context) {
        try {
            ctx.response.body = ctx.postId
        } catch (error) {
            console.log(error);
            
        }
    }

    async createPost(ctx: Context) {
        try {
            
            const body = ctx.request.body()
            const {title} = await body.value
            await PostDao.addPost({title})
            
            ctx.response.body = 'done'
        } catch (error) {
            console.log(error);
        }
    }
}

export default new PostController()