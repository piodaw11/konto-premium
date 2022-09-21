import AllProducts from 'src/client/presentation/Products/components/AllProducts'
import Layout from 'src/client/infrastructure/components/Layout/Layout'
import Product from 'src/client/presentation/Products/types/Product'
import { FunctionComponent } from 'react'

type Props = {
  items: Product[]
}

const AllProductsView: FunctionComponent<Props> = ({ items }) => (
  <Layout>
    <AllProducts allProducts={items} />
  </Layout>
)

export default AllProductsView
