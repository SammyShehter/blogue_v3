import { log } from './logger.ts'

export const call = async (
    url: string,
    method = 'GET',
    body: any = null,
    headers: any = {}
) => {
    if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
    }

    const response = await fetch(url as string, { method, body, headers })
    const data = await response.json()

    if (response.ok) {
        return data
    } else {
        log.callError('service-placeholder', data, response.status)
        return null
    }
}
