import { Context, Response } from '../../types/context.type.ts'
import {log} from '../../utils/logger.ts'
import type { postResponse } from '../../types/post.type.ts'

export function handleError(ctx: Context, message: string, status: number = 500) {
    ctx.response.status = status
    ctx.response.body = {
        status,
        message,
    }
    log.requestError(ctx, message, status)
}

export function handleSuccess(ctx: Context, response: postResponse) {
    const { message } = response
    const status = response.status || 200
    const res: Response = {
        message,
        status,
    }
    const data = response.data
    if (data) res.data = data
    ctx.response.status = status
    ctx.response.body = res
}
