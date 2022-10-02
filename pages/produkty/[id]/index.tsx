import { FunctionComponent } from 'react'
import { MongoClient } from 'mongodb'
import { ObjectId } from 'bson'

import ProductDetailView from 'src/client/presentation/ProductsDetails/views/ProductDetailView'
import Product from 'src/client/presentation/Products/types/Product'

type Props = {
  post: Product
}

const ProductDetails: FunctionComponent<Props> = ({ post }) => <ProductDetailView post={post} />

export default ProductDetails

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI!)
  await client.connect()
  const db = client.db(process.env.MONGODB_DB)

  const productsCollection = db.collection('products')
  const products = await productsCollection.find().toArray()

  const paths = products.map((product) => ({
    params: { id: product._id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

// get product details when id is correct
export const getStaticProps = async (context: any) => {
  const client = await MongoClient.connect(process.env.MONGODB_URI!)
  await client.connect()
  const db = client.db(process.env.MONGODB_DB)

  const productsCollection = db.collection('products')
  const id = new ObjectId(context.params.id)
  const product = await productsCollection.findOne({ _id: id })

  return {
    props: {
      post: JSON.parse(JSON.stringify(product))
    }
  }
}
