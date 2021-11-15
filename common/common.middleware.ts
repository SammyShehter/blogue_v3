import {Context} from '../types/context.type.ts'

export abstract class CommonMiddleware {
    static loggerMiddleware = async (ctx: Context, next: any) => {
        await next()
        const reqTime = ctx.response.headers.get('X-Response-Time')
        // const reqId = ctx.response.headers.get('X-Response-Id')
        const status = ctx.response.status
        console.log(
            // `${reqId} ${ctx.request.method} ${ctx.request.url} - ${reqTime} status: ${status}`
            `${ctx.request.method} ${ctx.request.url} - ${reqTime} status: ${status}`
        )
    }

    static timingMiddleware = async (ctx: Context, next: any) => {
        const start = Date.now()
        await next()
        const ms = Date.now() - start
        ctx.response.headers.set('X-Response-Time', `${ms}ms`)
    }

    
}