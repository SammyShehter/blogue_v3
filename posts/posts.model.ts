import { Model, DataTypes } from '../deps.ts'
import { db } from '../services/postgres.service.ts'

class PostSchema extends Model {
    static table = 'posts'

    static fields = {
        title: {
            type: DataTypes.STRING,
            length: 5,
            unique: true,
        },
        text: {
            type: DataTypes.STRING,
        },
    }

    static timestamps = true;

}


db.link([PostSchema])
export { PostSchema }
