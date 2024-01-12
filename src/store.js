import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer, // (cartSlice.reducer)
		modal: modalReducer, // (modalSlice.reducer)
	},
})
