import { getQuery } from '../../deps.ts'
import { RequestError } from '../common/common.error.ts'
import { handleError } from '../common/common.functions.ts'
import { Context } from '../../types/context.type.ts'
import CategorieDao from './categories.dao.ts'

class CategorieMiddleware {
    private categorieBody: Array<string>

    constructor() {
        this.categorieBody = ['title', 'text', 'image', 'slug']
        console.log('Created instance of CategorieMiddleware')
    }

    async inspectParam(ctx: Context, next: any) {
        try {
            const { categorieSlug } = getQuery(ctx, { mergeParams: true })
            ctx.categorieSlug = categorieSlug.trim() as string
            await next()
        } catch (error) {
            console.log(error)
        }
    }

    async parseBody(ctx: Context, next: any) {
        try {
            const body = ctx.request.body()
            ctx.body = await body.value

            await next()
        } catch (error) {
            console.log(error)
        }
    }

    inspectBody = async (ctx: Context, next: any) => {
        try {
            Object.keys(ctx.body).forEach((key) => {
                if (!this.categorieBody.includes(key))
                    throw new RequestError(400, `${key} is not valid field`)
            })

            await next()
        } catch (error) {
            handleError(ctx, error.message, error.status)
        }
    }

    categorieExists = async (ctx: Context, next: any) => {
        try {
            const categorie = await CategorieDao.getCategorie(ctx.categorieSlug as string)

            if (!categorie) throw new RequestError(404, 'Categorie not found')

            await next()
        } catch (error) {
            handleError(ctx, error.message, error.status)
        }
    }
}

export default new CategorieMiddleware()
