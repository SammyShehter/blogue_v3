import { OakContext } from '../deps.ts'
import type { post } from './post.type.ts'
import type { categorie } from './categorie.type.ts'

export class Context extends OakContext {
    correlationId?: string
    body?: any
    postSlug?: string
    post?: post
    categorieSlug?: string
}
export type Response = {
    message: string
    status: number
    data?: any
}
