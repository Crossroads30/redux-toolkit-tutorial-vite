import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItem: [],
	amount: 0,
	total: 0,
	isLoading: true,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
})

// console.log(carSlice)

export default cartSlice.reducer // it will be cartReducer in 'store.js' 
