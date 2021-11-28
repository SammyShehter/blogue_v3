export type post = {
    title?: string
    text?: string
    image?: string
}

export type postResponse = {
    status?: number
    message: string
    data?: any
}