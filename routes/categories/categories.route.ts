import { Router } from '../../deps.ts'
import { CommonRoutes } from '../common/common.routes.ts'
import CommonMiddleware from '../common/common.middleware.ts'
import CategorieController from './categories.controller.ts'
import CategorieMiddleware from './categories.middleware.ts'

export class CategorieRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Categorie Routes')
        console.log('Created instace of CategorieRoutes')
    }

    configureRoutes() {
        //
        // GET
        //
        this.router.get('/categories', CategorieController.getAllCategories)

        this.router.get(
            '/categorie/:categorieSlug',
            CategorieMiddleware.inspectParam,
            CategorieController.getCategorie
        )
        //
        //
        // POST
        //
        this.router.post(
            '/categorie',
            CommonMiddleware.auth,
            CategorieMiddleware.parseBody,
            CategorieMiddleware.inspectBody,
            CategorieController.addCategorie
        )
        //
        //
        // PATCH
        //
        this.router.patch(
            '/categorie',
            CommonMiddleware.auth,
            CategorieMiddleware.parseBody,
            CategorieMiddleware.inspectBody,
            CategorieMiddleware.categorieExists,
            CategorieController.patchCategorie
        )
        //
        //
        // DELETE
        //
        this.router.delete(
            '/categorie',
            CommonMiddleware.auth,
            CategorieMiddleware.parseBody,
            CategorieMiddleware.inspectBody,
            CategorieMiddleware.categorieExists,
            CategorieController.deleteCategorie
        )

        return this.router
    }
}
