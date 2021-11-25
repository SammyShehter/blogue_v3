import { PostgresConnector, Database } from '../deps.ts'

const connector = new PostgresConnector({
    host: '...',
    username: 'user',
    password: 'password',
    database: 'blogue',
  
})

const db = new Database(connector)

export { db }
