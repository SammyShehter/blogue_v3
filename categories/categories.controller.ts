import {Context} from '../types/context.ts'

class CategorieControler {
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

export default new CategorieControler()