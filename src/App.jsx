import { useSelector, useDispatch } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculatesTotals } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
	const { cartItems } = useSelector(store => store.cart)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculatesTotals())
	}, [cartItems])

	return (
		<main>
			<Modal />
			<Navbar />
			<CartContainer />
		</main>
	)
}
export default App
