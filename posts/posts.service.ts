import type { CreatePostDto } from './posts.dto.ts'
import PostDao from './posts.dao.ts'
import { RequestError } from '../common/common.error.ts'
import type { postResponse } from '../types/post.type.ts'

class PostService {
    /**
     * returns all posts to the client
     */
    async getAllPosts(): Promise<postResponse> {
        const posts = await PostDao.getAllPosts()
        return {
            message: '',
            data: posts,
        }
    }

    /**
     * returns specific post to the client
     */
    async getPost(postId: string): Promise<postResponse> {
        return {
            message: '',
        }
    }

    /**
     * creates a new entry in DB
     */
    async addPost(body: CreatePostDto): Promise<postResponse> {
        const newPost = await PostDao.addPost(body)
        if (!newPost.added) throw new RequestError(400, newPost.message)
        return {
            status: 201,
            message: newPost.message,
        }
    }
}

export default new PostService()
