import React, { FunctionComponent } from 'react'

import HomeView from 'src/client/presentation/HomePage/views/HomeView/HomeView'
import Product from 'src/client/presentation/Products/types/Product'
import { MongoClient } from 'mongodb'

type Props = {
  products: Product[]
}

const Home: FunctionComponent<Props> = ({ products }) => <HomeView homeProducts={products} />

export default Home

export const getServerSideProps = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI!)
  await client.connect()
  const db = client.db(process.env.MONGODB_DB)

  const productsCollection = db.collection('products')

  const products = await productsCollection.find().toArray()
  console.log(products)

  return {
    props: {
      products: JSON.stringify(products)
    }
  }
}
