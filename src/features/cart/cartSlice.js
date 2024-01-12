import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
	cartItems: cartItems,
	amount: 1,
	total: 0,
	isLoading: true,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
})

// console.log(carSlice)

export default cartSlice.reducer // it will be cartReducer in 'store.js' 
