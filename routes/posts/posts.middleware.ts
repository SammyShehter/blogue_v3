import { getQuery } from '../../deps.ts'
import { RequestError } from '../common/common.error.ts'
import { handleError } from '../common/common.functions.ts'
import { Context } from '../../types/context.type.ts'
import PostDao from './posts.dao.ts'

class PostMiddleware {
    private postBody: Array<string>

    constructor() {
        this.postBody = ['title', 'text', 'image', 'slug', 'preview']
        console.log('Created instance of PostMiddleware')
    }

    async inspectParam(ctx: Context, next: any) {
        try {
            const { postSlug } = getQuery(ctx, { mergeParams: true })
            ctx.postSlug = postSlug.trim()
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
                if (!this.postBody.includes(key))
                    throw new RequestError(400, `${key} is not valid field`)
            })

            await next()
        } catch (error) {
            handleError(ctx, error.message, error.status)
        }
    }

    postExists = async (ctx: Context, next: any) => {
        try {
            const post = await PostDao.getPost(ctx.postSlug as string)

            if (!post) throw new RequestError(404, 'Post not found')

            await next()
        } catch (error) {
            handleError(ctx, error.message, error.status)
        }
    }
}

export default new PostMiddleware()
