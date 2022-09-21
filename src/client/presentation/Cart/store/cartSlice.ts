import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import ProductState from 'src/client/presentation/Cart/types/ProductState'

const existingCart = Cookies.get('cart') ? JSON.parse(<string>Cookies.get('cart')) : []
const existingCartItems = existingCart.items ? existingCart.items : []

// {@todo repair totalQuantity after reload page}
const existingCartTotal: number = existingCart.total > 0 ? existingCart.total : 0
const existingCartTotalPrice: number = existingCart.totalPrice > 0 ? existingCart.totalPrice : 0

const initialState: ProductState = {
  items: existingCartItems,
  totalQuantity: existingCartTotal,
  totalPriceItems: existingCartTotalPrice,
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      state.totalPriceItems += newItem.price
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          title: newItem.title,
          totalPrice: newItem.price,
          image: newItem.image
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
      Cookies.set('cart', JSON.stringify({
        items: state.items,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPriceItems
      }))
    },
    removeFromCart(state, action) {
      const id = action.payload.id
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      state.totalPriceItems -= existingItem!.price
      state.changed = true
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
        Cookies.remove('cart')
      } else {
        existingItem!.totalPrice -= existingItem!.price
        Cookies.set('cart', JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPriceItems
        }))
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload.id
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalPriceItems -= existingItem.totalPrice
        state.items = state.items.filter((item) => item.id !== id)
        Cookies.set('cart', JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPriceItems
        }))
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalPriceItems = 0
      Cookies.remove('cart')
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
