import { Context } from '../types/context.type.ts'

function handleError(status: number, message: string, ctx: Context) {
    ctx.response.status = status
    ctx.response.body = {
        status,
        message,
    }
}

export { handleError }
