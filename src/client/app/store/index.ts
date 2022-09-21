import { configureStore } from '@reduxjs/toolkit'
import cartSlice from 'src/client/presentation/Cart/store/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export default store
