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
		},

		// increaseAmount: (state, { payload }) => {
		// 	const cartItem = state.cartItems.find(item => item.id === payload.id)
		// 	cartItem.amount = cartItem.amount + 1
		// },

		// decreaseAmount: (state, { payload }) => {
		// 	const cartItem = state.cartItems.find(item => item.id === payload.id)
		// 	cartItem.amount = cartItem.amount - 1
		// },

		toggleAmount: (state, { payload }) => {
			state.cartItems.map(item => {
				if (item.id === payload.id) {
					if (payload.type === 'increase') {
						item.amount = item.amount + 1
					} else if (payload.type === 'decrease') {
						item.amount = item.amount - 1
					}
				}
			})
		},
	},
})

// console.log(cartSlice)
export const {
	clearCart,
	removeItem,
	toggleAmount,
	increaseAmount,
	decreaseAmount,
} = cartSlice.actions

export default cartSlice.reducer // it will be cartReducer in 'store.js'
