import { MongoClient } from 'mongodb'

const API_URL = process.env.MONGODB_URI
const DB_NAME = process.env.MONGODB_DB

const useConnectToDatabase = async () => {
  const client = await MongoClient.connect(API_URL!)
  await client.connect()
  const db = client.db(DB_NAME)

  return {
    client,
    db
  }
}

export default useConnectToDatabase
