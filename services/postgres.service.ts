import { PostgresConnector, Database } from '../deps.ts'

const connector = new PostgresConnector({
    host: '127.0.0.1',
    port: 5438,
    username: 'sammy',
    password: '123456',
    database: 'blogue',
  
})

const db = new Database(connector)

export { db }
