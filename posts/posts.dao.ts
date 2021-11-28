import { PostSchema } from './posts.model.ts'
import type { CreatePostDto } from './posts.dto.ts'

class PostDao {
    private postsStorage: any // PostSchema

    constructor() {
        this.postsStorage = PostSchema
        console.log('Created instance of PostDao')
    }

    async getAllPosts() {
            const posts = await this.postsStorage.all()
            return posts
    }

    async addPost(
        postFields: CreatePostDto
    ): Promise<{ added: boolean; message: string }> {
        try {
            await this.postsStorage.create({ ...postFields })
            return {
                added: true,
                message: `${postFields.title} added successfully`,
            }
        } catch (error) {
            return {
                added: false,
                message: error.message,
            }
        }
    }
}

export default new PostDao()
