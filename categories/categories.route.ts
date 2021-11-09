import { Router } from '../deps.ts'
import CommonRoutes from '../common/common.routes.ts'
import CategorieControler from './posts.controller.ts'

export class CategorieRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Categorie Routes')
    }

    configureRoutes() {
        this.router.get('/', CategorieControler.retrieveAllCategories)

        return this.router
    }
}
