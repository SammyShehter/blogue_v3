import {getQuery} from '../deps.ts'
import {Context} from '../types/context.type.ts'
import {CommonMiddleware} from '../common/common.middleware.ts'

class PostMiddleware extends CommonMiddleware {
    async inspectParam (ctx: Context, next:any) {
        const {postId} = getQuery(ctx, { mergeParams: true });
        ctx.postId = postId.trim()
        await next()
    }
}

export default new PostMiddleware()