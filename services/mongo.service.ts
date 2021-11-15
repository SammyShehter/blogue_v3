import { MongoDBConnector, Database } from '../deps.ts'

const connector = new MongoDBConnector({
    uri: 'mongodb://localhost:27017',
    database: 'Blogue',
})

const db = new Database(connector)

export { db }
