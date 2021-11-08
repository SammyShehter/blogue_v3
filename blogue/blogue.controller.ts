import {Context} from '../types/context.ts'

class BlogueControler {
    /**
     * returns all posts to client
     */
    retrieveAllPosts(ctx: Context) {
        try {
            ctx.response.body = 'done'
        } catch (error) {
            console.log(error);
        }
    }
}

export default new BlogueControler()