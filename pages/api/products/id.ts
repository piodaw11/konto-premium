import useConnectToDatabase from 'src/server/hooks/useConnectToDatabase'
import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'bson'

const GetId = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    db,
    client
  } = await useConnectToDatabase()

  const productsCollection = db.collection('products')

  // @ts-ignore
  const id = new ObjectId(req.query.id)

  const product = await productsCollection.findOne({ _id: id })

  console.log(await productsCollection.findOne({ _id: id }))

  await client.close()

  res.status(200).json({
    product
  })
}

export default GetId
