import React, { FunctionComponent } from 'react'
import axios from 'axios'

import HomeView from 'src/client/presentation/HomePage/views/HomeView/HomeView'
import Product from 'src/client/presentation/Products/types/Product'

type Props = {
  products: Product[]
}

const Home: FunctionComponent<Props> = ({ products }) => <HomeView homeProducts={products} />

export default Home

export const getServerSideProps = async () => {
  const allProducts = await axios.get('/api/products/getAll')

  return {
    props: {
      products: allProducts.data.products
    }
  }
}
