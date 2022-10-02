import { FunctionComponent } from 'react'

import ProductDetail from 'src/client/presentation/ProductsDetails/components/ProductDetail'
import Product from 'src/client/presentation/Products/types/Product'
import Layout from 'src/client/infrastructure/components/Layout/Layout'

type Props = {
  post: Product
}

const ProductDetailView: FunctionComponent<Props> = ({ post }) => (
  <Layout>
    <ProductDetail product={post} />
  </Layout>
)

export default ProductDetailView
