import { OakContext } from '../deps.ts'
import type { post } from './post.type.ts'

export class Context extends OakContext {
    correlationId?: string
    body?: any
    postSlug?: string
    post?: post
}
export type Response = {
    message: string
    status: number
    data?: any
}
