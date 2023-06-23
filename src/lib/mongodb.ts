import { type Db, MongoClient } from 'mongodb'

let cached_db: Db | null = null;

export async function connectToDatabase() {
    
    if(cached_db) {
        return cached_db
    }

    const client = new MongoClient(process.env.MONGODB_URI as string)

    try {
        await client.connect()
        const db = client.db(process.env.DATABASE_NAME as string)
        cached_db = db

        return cached_db

    } catch(error) {
        console.error('Failed to connect to the database!',error)
        throw error
    }
}
