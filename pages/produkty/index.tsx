import React, { FunctionComponent } from 'react'
import axios from 'axios'

import AllProductsView from 'src/client/presentation/Products/views/AllProductsView'
import Product from 'src/client/presentation/Products/types/Product'

type Props = {
  products: Product[]
}

const Products: FunctionComponent<Props> = ({ products }) => <AllProductsView items={products} />

export default Products

export const getStaticProps = async () => {
  const allProducts = await axios.get('http://localhost:3000/api/products/getAll')

  return {
    props: {
      products: allProducts.data.products
    }
  }
}
