import { useDispatch } from 'react-redux'
import {
	removeItem,
	toggleAmount,
	increaseAmount,
	decreaseAmount,
} from '../features/cart/cartSlice'
import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ id, title, price, image, amount }) => {
	const dispatch = useDispatch()

	return (
		<article className='cart-item'>
			<img src={image} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button
					onClick={() => dispatch(removeItem(id))}
					className='remove-btn'
					type='button'
				>
					remove
				</button>
			</div>
			<div>
				<button
					onClick={() => dispatch(toggleAmount({ id, type: 'increase' }))} // we pass the payload( is the object!!!)
					type='button'
					className='amount-btn'
				>
					<ChevronUp />
				</button>
				<p className='amount'>{amount}</p>
				<button
					onClick={() => {
						if (amount === 1) {
							dispatch(removeItem(id))
						}
						dispatch(toggleAmount({ id, type: 'decrease' }))}} // we pass the payload( is the object!!!)
					type='button'
					className='amount-btn'
				>
					<ChevronDown />
				</button>
			</div>
		</article>
	)
}
export default CartItem
