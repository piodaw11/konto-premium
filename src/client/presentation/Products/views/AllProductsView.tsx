import { FunctionComponent } from 'react'

import AllProducts from 'src/client/presentation/Products/components/AllProducts'
import Layout from 'src/client/infrastructure/components/Layout/Layout'

type Props = {
  items: string
}

const AllProductsView: FunctionComponent<Props> = ({ items }) => (
  <Layout>
    <AllProducts allProducts={items} />
  </Layout>
)

export default AllProductsView
