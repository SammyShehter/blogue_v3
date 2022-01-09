import { CategorieSchema } from './categories.model.ts'
import type { CreateCategorieDto, PatchCategorieDto } from './categories.dto.ts'

class CategorieDao {
    private categoriesStorage: any // CategorieSchema

    constructor() {
        this.categoriesStorage = CategorieSchema
        console.log('Created instance of CategorieDao')
    }

    async getAllCategories() {
        return this.categoriesStorage.take(10).get()
    }

    async getCategorie(categorieSlug: string) {
        const categorie = await this.categoriesStorage
            .where('slug', categorieSlug)
            .take(1)
            .get()
        return categorie[0]
    }

    async addCategorie(
        categorieFields: CreateCategorieDto
    ): Promise<{ added: boolean; message: string }> {
        try {
            await this.categoriesStorage.create({ ...categorieFields })
            return {
                added: true,
                message: `'${categorieFields.title}' categorie added successfully`,
            }
        } catch (error) {
            return {
                added: false,
                message: error.message,
            }
        }
    }

    async patchCategorie(
        categorieFields: PatchCategorieDto
    ): Promise<{ patched: boolean; message: string }> {
        try {
            await this.categoriesStorage
                .where('slug', categorieFields.slug)
                .update({ ...categorieFields })
            return {
                patched: true,
                message: 'categorie was edited successfully',
            }
        } catch (error) {
            return {
                patched: false,
                message: error.message,
            }
        }
    }

    async deleteCategorie(categorieSlug: string) {
        try {
            await this.categoriesStorage.where('slug', categorieSlug).delete()
            return {
                deleted: true,
                message: 'categorie was deleted successfully',
            }
        } catch (error) {
            return {
                deleted: false,
                message: error.message,
            }
        }
    }
}

export default new CategorieDao()
