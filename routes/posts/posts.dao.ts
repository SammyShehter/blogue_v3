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

    async getPost(postSlug: string) {
        const post = await this.postsStorage.where('slug', postSlug).take(1).get()
        return post[0]
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
                .where('slug', postFields.slug)
                .update({ ...postFields })
            return {
                patched: true,
                message: 'post was edited successfully',
            }
        } catch (error) {
            return {
                patched: false,
                message: error.message,
            }
        }
    }
}

export default new PostDao()
