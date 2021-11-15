import {Context} from '../types/context.type.ts'

class CategorieController {
    /**
     * returns all posts to client
     */
    retrieveAllCategories(ctx: Context) {
        try {
            ctx.response.body = 'done'
        } catch (error) {
            console.log(error);
        }
    }
}

export default new CategorieController()