import { NextApiRequest, NextApiResponse } from 'next'
import useConnectToDatabase from 'src/server/hooks/useConnectToDatabase'

const GetAllProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    db,
    client
  } = await useConnectToDatabase()

  const productsCollection = db.collection('products')

  const products = await productsCollection.find().toArray()

  await client.close()

  res.status(200).json({
    products
  })
}

export default GetAllProducts
