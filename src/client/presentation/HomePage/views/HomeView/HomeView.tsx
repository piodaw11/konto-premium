import { FunctionComponent } from 'react'

import Header from 'src/client/presentation/HomePage/components/Header/Header'
import Layout from 'src/client/infrastructure/components/Layout/Layout'
import ItemListing from 'src/client/presentation/HomePage/components/ItemListing/ItemListing'

type Props = {
  homeProducts: string
}

const HomeView: FunctionComponent<Props> = ({ homeProducts }) => (
  <Layout>
    <Header />
    <ItemListing allProducts={homeProducts} />
  </Layout>
)

export default HomeView
