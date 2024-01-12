import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
	// we access the entire store from this selector:
	// const amount = useSelector(store => store.cart.amount)

  //we also get the necessary prop with destruction our cart obj:
 	const {amount} = useSelector(store => store.cart)

	return (
		<nav>
			<div className='nav-center'>
				<h3>redux toolkit</h3>
				<div className='nav-container'>
					<CartIcon />
					<div className='amount-container'>
						<p className='total-amount'>{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
