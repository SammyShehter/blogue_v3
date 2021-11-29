
export interface CreatePostDto {
    title: string
    text: string
    slug: string
    image?: string
    viewed?: number
}


   
export interface PatchPostDto {
    slug: string
    title?: string
    text?: string
    image?: string
    viewed?: number
}