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
	reducers: {
		clearCart: state => {
			state.cartItems = []
		},
		// whatever we return from action will become a new state,
		// so if we omit rest props, they will be gone
		// clearCart: {
		// return {
		// cartItems: [],
		//   }
		// }
		removeItem: (state, action) => {
			const itemId = action.payload
			state.cartItems = state.cartItems.filter(item => item.id !== itemId)
		}
	},
})

// console.log(cartSlice)
export const { clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer // it will be cartReducer in 'store.js'
