import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: ''
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.access_token = action.payload
    }
  }
})

export const checkoutActions = checkoutSlice.actions

export default checkoutSlice
