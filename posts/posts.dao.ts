import { PostSchema } from './posts.model.ts'
import type { CreatePostDto, PatchPostDto } from './posts.dto.ts'

class PostDao {
    private postsStorage: any // PostSchema

    constructor() {
        this.postsStorage = PostSchema
        console.log('Created instance of PostDao')
    }

    async getAllPosts() {
        return this.postsStorage.take(10).get()
    }

    async getPost(postId: string) {
        return this.postsStorage.where('slug', postId).take(1).get()
    }

    async addPost(
        postFields: CreatePostDto
    ): Promise<{ added: boolean; message: string }> {
        try {
            await this.postsStorage.create({ ...postFields })
            return {
                added: true,
                message: `'${postFields.title}' post added successfully`,
            }
        } catch (error) {
            return {
                added: false,
                message: error.message,
            }
        }
    }

    async patchPost(
        postFields: PatchPostDto
    ): Promise<{ patched: boolean; message: string }> {
        try {
            await this.postsStorage
                .where('title', postFields.title)
                .update({ ...postFields })
        } catch (error) {}
        return {
            patched: true,
            message: '',
        }
    }
}

export default new PostDao()
