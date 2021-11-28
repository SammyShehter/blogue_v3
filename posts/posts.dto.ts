
export interface CreatePostDto {
    title: string
    text: string
    image?: string
    viewed?: number
}


   
export interface PatchPostDto {
    title?: string
    text?: string
    image?: string
    viewed?: number
}