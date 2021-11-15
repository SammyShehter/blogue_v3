import { Router } from '../deps.ts'
import {CommonRoutes} from '../common/common.routes.ts'
import CategorieController from './categories.controller.ts'

export class CategorieRoutes extends CommonRoutes {
    constructor(router: Router) {
        super(router, 'Categorie Routes')
    }

    configureRoutes() {
        this.router.get('/categories', CategorieController.retrieveAllCategories)

        return this.router
    }
}
