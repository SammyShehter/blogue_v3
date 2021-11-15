import { Model, DataTypes } from '../deps.ts'
import {db} from '../services/mongo.service.ts'

class PostSchema extends Model {
    static table = 'posts';

    static fields = {
        _id: {
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
            length: 5,
        },
    }
}

db.link([PostSchema]);


export { PostSchema }
