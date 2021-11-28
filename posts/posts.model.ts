import { Model, DataTypes } from '../deps.ts'
import { db } from '../services/postgres.service.ts'

class PostSchema extends Model {
    static table = 'posts'

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        title: {
            type: DataTypes.STRING,
            length: 32,
            unique: true,
        },
        text: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    }

    static timestamps = true
}

db.link([PostSchema])
await db.sync({ drop: true })
export { PostSchema }
