import {
	buildCreateSlice,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit'
import axios from 'axios'
// import cartItems from '../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
	cartItems: [],
	amount: 0,
	total: 0,
	isLoading: true,
}

// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
// 	// first param: sliceType/action itself, second: callback function
// 	return fetch(url)
// 		.then(response => response.json())
// 		.catch(error => console.log(error))
// })

//example with axios:
export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
	// first param: sliceType/action itself, second: callback function
try {
	const response = await axios(url) // don't forget about 'await'!!!
	// console.log(response)
	return response.data // in 'axios' we need a 'data' obj from response!!! 
} catch (error) {
	
}
})

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

		calculatesTotals: state => {
			let amount = 0
			let total = 0
			state.cartItems.forEach(item => {
				amount += item.amount
				total += item.amount * item.price
			})
			state.amount = amount
			state.total = total
		},
	},
	extraReducers: builder => {
		// three lifecycle actions(pending, fulfilled, rejected):
		builder
			.addCase(getCartItems.pending, state => {
				state.isLoading = true
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				// console.log(action)
				state.isLoading = false
				state.cartItems = action.payload
			})
			.addCase(getCartItems.rejected, (state, action) => {
				console.log(action)
				state.isLoading = false
			})
	},
})

// console.log(cartSlice)
export const {
	clearCart,
	removeItem,
	toggleAmount,
	increaseAmount,
	decreaseAmount,
	calculatesTotals,
} = cartSlice.actions

export default cartSlice.reducer // it will be cartReducer in 'store.js'
