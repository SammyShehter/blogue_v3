
export interface CreatePostDto {
    title: string
    // body: string
    // image: string
    // date: Date
    // lastEdited?: Date
    // viewed?: number
}


   
export interface PatchPostDto {
    title?: string
    body?: string
    image?: string
    lastEdited?: Date
    viewed?: number
}