import {MongoClient} from '../deps.ts'

class MongoService {

    client

    constructor(){
        this.client = new MongoClient()
    }


    async connection() {
        try {
            await this.client.connect("mongodb://localhost:27017");    
        } catch (error) {
            console.log(error);
        }
    }
    

    // // Connecting to a Mongo Atlas Database
    // await client.connect({
    //   db: "<db_name>",
    //   tls: true,
    //   servers: [
    //     {
    //       host: "<db_cluster_url>",
    //       port: 27017,
    //     },
    //   ],
    //   credential: {
    //     username: "<username>",
    //     password: "<password>",
    //     db: "<db_name>",
    //     mechanism: "SCRAM-SHA-1",
    //   },
    // });

    // // Connect using srv url
    // await client.connect(
    //   "mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1",
    // );

}

export default new MongoService()