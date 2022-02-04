import { Model, DataTypes } from '../../deps.ts'
import { db } from '../../services/postgres.service.ts'

class PostSchema extends Model {
    static table = 'posts'

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        title: {
            type: DataTypes.STRING,
            length: 32,
            unique: true,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            unique: true,
            length: 32,
            allowNull: false,
        },
        preview: {
            type: DataTypes.STRING,
            unique: true,
            length: 250,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            length:8600,
            allowNull: false,
        },
        viewed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }

    static timestamps = true
}

db.link([PostSchema])
// await db.sync({ drop: true })
export { PostSchema }
