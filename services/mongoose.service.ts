import { MongoClient } from '../deps.ts'


const client = new MongoClient();
await client.connect("mongodb://localhost:27017");

const db = client.database("Blogue");

export {db}