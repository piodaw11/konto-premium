import React, { FunctionComponent } from 'react'

import AllProductsView from 'src/client/presentation/Products/views/AllProductsView'
import Product from 'src/client/presentation/Products/types/Product'
import { MongoClient } from 'mongodb'

type Props = {
  products: Product[]
}

const Products: FunctionComponent<Props> = ({ products }) => <AllProductsView items={products} />

export default Products

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
