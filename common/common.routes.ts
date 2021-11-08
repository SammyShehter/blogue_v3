import { Router } from '../deps.ts'

export default abstract class CommonRoutes {
    router: Router
    name: string

    constructor(app: Router, name: string) {
        this.router = app
        this.name = name
        this.configureRoutes()
    }

    getName() {
        return this.name
    }

    abstract configureRoutes(): Router
}
