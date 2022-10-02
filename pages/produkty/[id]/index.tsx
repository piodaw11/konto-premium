import axios from 'axios'
import { FunctionComponent } from 'react'

import ProductDetailView from 'src/client/presentation/ProductsDetails/views/ProductDetailView'
import Product from 'src/client/presentation/Products/types/Product'

type Props = {
  post: Product
}

const ProductDetails: FunctionComponent<Props> = ({ post }) => <ProductDetailView post={post} />

export default ProductDetails

export const getStaticPaths = async () => {
  const res = await axios.get('https://konto-premium.pl/api/products/getAll')
  const { products } = res.data

  const paths = products.map((product: any) => ({
      params: { id: product._id }
    }))

  return {
    paths,
    fallback: false
  }
}

// get product details when id is correct
export const getStaticProps = async (context: any) => {
  const { id } = context.params
  const res = await axios.get('https://konto-premium.pl/api/products/id/', {
    params: { id }
  })
  const { product } = res.data

  return {
    props: {
      post: product
    }
  }
}
