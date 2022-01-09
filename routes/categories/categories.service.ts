import type { CreateCategorieDto, PatchCategorieDto } from './categories.dto.ts'
import CategorieDao from './categories.dao.ts'
import { RequestError } from '../common/common.error.ts'
import { createSlug } from '../../utils/helpers.ts'
import type { categorieResponse } from '../../types/categorie.type.ts'

class CategorieService {
    constructor() {
        console.log('Created instace of CategorieService')
    }
    /**
     * a
     */
    async getAllCategories(): Promise<categorieResponse> {
        const categories = await CategorieDao.getAllCategories()
        if (!categories.length) throw new RequestError(404, 'No categories found')
        return {
            message: 'Last 10 categories',
            data: categories,
        }
    }

    /**
     * b
     */
    async getCategorie(categorieSlug: string): Promise<categorieResponse> {
        const categorie = await CategorieDao.getCategorie(categorieSlug)
        if (!categorie) throw new RequestError(404, 'Categorie not found')
        categorie.viewed += 1
        const addWatch = await CategorieDao.patchCategorie(categorie) // +1 watch
        if (!addWatch.patched) throw new RequestError(400, addWatch.message)
        return {
            message: 'Requested categorie',
            data: categorie,
        }
    }

    /**
     * c
     */
    async addCategorie(body: CreateCategorieDto): Promise<categorieResponse> {
        body.slug = createSlug(body.title)
        body.viewed = 0
        body.image = body.image ?? 'default'
        const newCategorie = await CategorieDao.addCategorie(body)
        if (!newCategorie.added) throw new RequestError(400, newCategorie.message)
        return {
            status: 201,
            message: newCategorie.message,
        }
    }

    /**
     * d
     */
    async patchCategorie(body: PatchCategorieDto): Promise<categorieResponse> {
        const categorie = await CategorieDao.patchCategorie(body)
        if (!categorie.patched) throw new RequestError(400, categorie.message)
        return {
            status: 200,
            message: categorie.message,
        }
    }

    /**
     * e
     */
    async deleteCategorie(categorieSlug: string) {
        const categorie = await CategorieDao.deleteCategorie(categorieSlug)
        if (!categorie.deleted) throw new RequestError(400, categorie.message)
        return {
            status: 200,
            message: categorie.message,
        }
    }
}

export default new CategorieService()
