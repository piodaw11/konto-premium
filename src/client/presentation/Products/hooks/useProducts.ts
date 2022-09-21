import axios from 'axios'

const GetAllProducts = async () => {
  const response = await axios.get('/api/products/getAll')

  const products = response.data.products

  return {
    products
  }
}

export default GetAllProducts
