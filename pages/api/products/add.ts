import { NextApiRequest, NextApiResponse } from 'next'

import useConnectToDatabase from 'src/server/hooks/useConnectToDatabase'

const AddProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    db,
    client
  } = await useConnectToDatabase()

  const { name, image, price, description, category } = req.body

  const productsCollection = db.collection('products')

  await productsCollection.insertOne({
    name,
    image,
    price,
    description,
    category
  })

  await client.close()

  res.status(201).json({
    message: 'Pomyślnie dodano przedmiot'
  })
}

export default AddProducts
