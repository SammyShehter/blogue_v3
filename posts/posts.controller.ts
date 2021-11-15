import {Context} from '../types/context.type.ts'
import PostDao from './posts.dao.ts'
class PostControler {
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

    async createPost(ctx: Context) {
        try {
            await PostDao.addPost({title: 'xcv'})
            ctx.response.body = 'done'
        } catch (error) {
            console.log(error);
        }
    }
}

export default new PostControler()