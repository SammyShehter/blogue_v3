import {PostSchema} from './posts.model.ts'
import {CreatePostDto} from './posts.dto.ts'


class PostDao {
    
    constructor() {
        console.log('Created instance of PostDao');
        PostSchema
    }

    async getAllPosts() {
        const posts = await PostSchema.all()
        
        // posts.forEach(post => {
        //     delete post._id
        // })
        return posts
    }

    async addPost(postFields: CreatePostDto) {
        try {
            await PostSchema.create({...postFields})
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