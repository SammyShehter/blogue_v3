import { Context } from '../../types/context.type.ts'
import { handleSuccess, handleError } from '../common/common.functions.ts'
import CategorieService from './categories.service.ts'
class CategorieController {
    constructor() {
        console.log('Created instance of CategorieController')
    }


    /**
     * returns all categories to the client
     */
    async getAllCategories(ctx: Context) {
        try {
            const response = await CategorieService.getAllCategories()
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * returns specific categorie to the client
     */
    async getCategorie(ctx: Context) {
        try {
            const response = await CategorieService.getCategorie(ctx.categorieSlug as string)
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * creates a new entry in DB
     */
    async addCategorie(ctx: Context) {
        try {
            const response = await CategorieService.addCategorie(ctx.body)
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * patches selected entry in DB
     */
    async patchCategorie(ctx: Context) {
        try {
            const response = await CategorieService.patchCategorie(ctx.body)
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }

    /**
     * deletes selected entry in DB
     */
    async deleteCategorie(ctx: Context) {
        try {
            const response = await CategorieService.deleteCategorie(
                ctx.categorieSlug as string
            )
            return handleSuccess(ctx, response)
        } catch (error) {
            return handleError(ctx, error.message, error.status)
        }
    }
}

export default new CategorieController()
