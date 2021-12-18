import { Context } from '../types/context.type.ts'

export function createSlug(title: string) {
    return title.trim().toLowerCase().split(' ').join('_')
}

export async function loggerMiddleware(ctx: Context, next: any) {
    ctx.correlationId = crypto.randomUUID()
    await next()
    const reqTime = ctx.response.headers.get('X-Response-Time')
    const status = ctx.response.status
    console.log(
        `${ctx.request.method} ${ctx.request.url} - ${reqTime} status: ${status}`
    )
}

export async function timingMiddleware(ctx: Context, next: any) {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.response.headers.set('X-Response-Time', `${ms}ms`)
}
