import {PostSchema} from './posts.model.ts'
import {CreatePostDto} from './posts.dto.ts'


class PostDao {
    private postStorage
    constructor() {
        console.log('Created instance of PostDao');
        this.postStorage = PostSchema
    }

    async getAllPosts() {
        const posts = await this.postStorage.all()
        
        // posts.forEach(post => {
        //     delete post._id
        // })
        return posts
    }

    async addPost(postFields: CreatePostDto) {
        try {
            const newPost = new this.postStorage()
            newPost.title = postFields.title
            await newPost.save()
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