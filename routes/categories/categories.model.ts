import { Model, DataTypes } from '../../deps.ts'
import { db } from '../../services/postgres.service.ts'

class CategorieSchema extends Model {
    static table = 'categories'

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
            length: 40,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
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

db.link([CategorieSchema])
// await db.sync({ drop: true })
export { CategorieSchema }
