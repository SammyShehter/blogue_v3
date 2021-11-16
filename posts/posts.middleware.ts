import { getQuery } from '../deps.ts'
import { RequestError } from '../common/common.error.ts'
import { handleError } from '../common/common.functions.ts'
import { Context } from '../types/context.type.ts'
import { CommonMiddleware } from '../common/common.middleware.ts'

class PostMiddleware extends CommonMiddleware {
    private postBody = ['title', 'text']

    async inspectParam(ctx: Context, next: any) {
        try {
            const { postId } = getQuery(ctx, { mergeParams: true })
            ctx.postId = postId.trim()
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
            handleError(error.status, error.message, ctx)
        }
    }
}

export default new PostMiddleware()
