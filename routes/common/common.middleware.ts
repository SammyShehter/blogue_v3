import { Context } from '../../types/context.type.ts'
import { handleError } from './common.functions.ts'
import { RequestError } from './common.error.ts'
import { call } from '../../utils/http.ts'
import { USERS_SERVICE, API_KEY } from '../../utils/globals.ts'

class CommonMiddleware {
    private userService: string
    private apiKey: string

    constructor(usersUrl: string, apiKey: string) {
        this.userService = usersUrl
        this.apiKey = apiKey
        console.log('Created instance of CommonMiddleware')
    }

    auth = async (ctx: Context, next: any) => {
        try {
            const rawToken = ctx.request.headers.get('Authorization')
            if (!rawToken) throw new RequestError(401, `Not authorized`)
            const token = rawToken.split(' ')[1]
            const body = { token }
            const headers = { inner_call: this.apiKey }

            const response = await call(
                `${this.userService}/innercall`,
                'POST',
                body,
                headers
            )
            
            if (!response.data || response.data.role !== 'ADMIN')
                throw new RequestError(401, `Not authorized`)

            await next()
        } catch (error) {
            handleError(ctx, error.message, 401)
        }
    }
}

export default new CommonMiddleware(USERS_SERVICE as string, API_KEY as string)
