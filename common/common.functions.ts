import { Context } from '../types/context.type.ts'
import type { postResponse } from '../types/post.type.ts'

function handleError(ctx: Context, message: string, status: number = 500) {
    ctx.response.status = status
    ctx.response.body = {
        status,
        message,
    }
}

function handleSuccess(ctx: Context, response: postResponse) {
    const { message } = response
    const status = response.status || 200
    const data = response.data || []
    ctx.response.status = status
    ctx.body = {
        status,
        message,
        data,
    }
}

export { handleError, handleSuccess }
