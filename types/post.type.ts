export type post = {
    slug: string
    title: string
    text: string
    image: string
}

export type postResponse = {
    message: string
    status?: number
    data?: any
}