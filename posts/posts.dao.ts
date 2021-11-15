import {db} from '../services/mongoose.service.ts'
import {PostSchema} from '../types/post.type.ts'
import {CreatePostDto} from './posts.dto.ts'


class PostDao {
    
    private posts

    constructor() {
        console.log('Created instance of PostDao');
        this.posts = db.collection<PostSchema>('posts')
    }

    async getAllPosts() {
        const posts = await this.posts.find().toArray()
        posts.forEach(post => {
            delete post._id
        })
        return posts
    }

    async addPost(postFields: CreatePostDto) {
        try {
            await this.posts.insertOne(postFields)
            return 'done'
        } catch (error) {
            console.log(error);
        }
        // title: string
        // body: string
        // image: string
        // date: Date
        // lastEdited?: Date
        // viewed?: number
    }
    

}

export default new PostDao()