import { PostgresConnector, Database } from '../deps.ts'
import {POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER} from '../utils/globals.ts' 

const connector = new PostgresConnector({
    host: '127.0.0.1',
    port: 5438,
    username: POSTGRES_USER!,
    password: POSTGRES_PASSWORD!,
    database: POSTGRES_DB!,
})

const db = new Database(connector)

export { db }
