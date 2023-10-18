import { configureStore,  } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'

const store = configureStore({
  reducer: {
    allCarts: cartReducer,
  }
})

export default store
