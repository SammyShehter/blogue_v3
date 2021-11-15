import { Router } from '../deps.ts'
import {CommonRoutes} from '../common/common.routes.ts'
import CategorieControler from './categories.controller.ts'

export class CategorieRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Categorie Routes')
    }

    configureRoutes() {
        this.router.get('/categories', CategorieControler.retrieveAllCategories)

        return this.router
    }
}
