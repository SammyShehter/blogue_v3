import { Context } from '../types/context.type.ts'
export const log = {
    serviceStarted: (port: number) => {
        console.log(`
██████╗ ██╗      ██████╗  ██████╗ ██╗   ██╗███████╗
██╔══██╗██║     ██╔═══██╗██╔════╝ ██║   ██║██╔════╝
██████╔╝██║     ██║   ██║██║  ███╗██║   ██║█████╗  
██╔══██╗██║     ██║   ██║██║   ██║██║   ██║██╔══╝  
██████╔╝███████╗╚██████╔╝╚██████╔╝╚██████╔╝███████╗
╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝
        `)

        console.log(`Server is listening on port ${port}`)
    },

    getHeaders: (iterator: any): string => {
        const headers: Array<string> = []
        const headersIterable: Array<[string, boolean]> = [
            ['postman-token', true],
            ['accept', true],
            ['accept-encoding', true],
            ['connection', true],
            ['host', true],
        ]
        const allowedKeys = new Map(headersIterable)
        for (let pair of iterator.entries()) {
            const key: string = pair[0]
            const value: string = pair[1]
            allowedKeys.has(key) ? null : headers.push(`\n\t${key}: ${value}`)
        }
        return headers.join('')
    },

    requestError: function(ctx: Context, message: string, status: number) {
        console.error(`
############## Incoming Request Error ##############
    corelation id: ${ctx.correlationId}

    ip: ${ctx.request.ip}
    method: ${ctx.request.method}
    path: ${ctx.request.url}
    message: ${message}
    status: ${status}

    
    headers: ${
        this.getHeaders(ctx.request.headers)
    }
####################################################
        `)
    },

    callError: (service: string, message: string, status: number) => {
        console.error(`
################# Http Call Error ##################
    service: ${service}
    message: ${message}
    status: ${status}
####################################################
        `)
    },
}
