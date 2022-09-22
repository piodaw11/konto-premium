type ProductState = {
  items: {
    id: string
    price: number
    quantity: number
    title: string
    totalPrice: number
    image: string
    stripeId: string
  }[],
  totalQuantity: number
  totalPriceItems: number
  changed: boolean
}

export default ProductState
