
export interface CreatePostDto {
    title: string
    preview: string
    text: string
    slug: string
    image?: string
    viewed?: number
}

export interface PatchPostDto {
    slug: string
    preview?: string
    title?: string
    text?: string
    image?: string
    viewed?: number
}

