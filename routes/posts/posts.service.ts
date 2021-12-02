import type { CreatePostDto, PatchPostDto } from './posts.dto.ts'
import PostDao from './posts.dao.ts'
import { RequestError } from '../common/common.error.ts'
import { createSlug } from '../../utils/helpers.ts'
import type { postResponse } from '../../types/post.type.ts'

class PostService {
    /**
     * a
     */
    async getAllPosts(): Promise<postResponse> {
        const posts = await PostDao.getAllPosts()
        return {
            message: 'Last 20 posts',
            data: posts,
        }
    }

    /**
     * b
     */
    async getPost(postSlug: string): Promise<postResponse> {
        const post = await PostDao.getPost(postSlug)
        post.viewed += 1
        const addWatch = await PostDao.patchPost(post) // +1 watch
        if (!addWatch.patched) throw new RequestError(400, addWatch.message)
        return {
            message: 'Requested post',
            data: post,
        }
    }

    /**
     * c
     */
    async addPost(body: CreatePostDto): Promise<postResponse> {
        body.slug = createSlug(body.title)
        body.viewed = 0
        body.image = body.image ?? 'default'
        const newPost = await PostDao.addPost(body)
        if (!newPost.added) throw new RequestError(400, newPost.message)
        return {
            status: 201,
            message: newPost.message,
        }
    }

    /**
     * d
     */
    async patchPost(body: PatchPostDto): Promise<postResponse> {
        const post = await PostDao.patchPost(body)
        if (!post.patched) throw new RequestError(400, post.message)
        return {
            status: 200,
            message: post.message,
        }
    }
}

export default new PostService()
