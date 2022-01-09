
export interface CreateCategorieDto {
    title: string
    text: string
    slug: string
    image?: string
    viewed?: number
}

export interface PatchCategorieDto {
    slug: string
    title?: string
    text?: string
    image?: string
    viewed?: number
}

