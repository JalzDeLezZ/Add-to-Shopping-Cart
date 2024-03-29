import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from "../context/AppContext";
import arrow from '@icons/flechita.svg';

const MyOrder = () => {

	const {state} = useContext(AppContext);

	const sumTotal = () => {

		const firstParams = (previousValue, currentValue) => previousValue + currentValue.price;
		const sum = state.cart.reduce(firstParams, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map(prod => (
					<OrderItem product={prod} key={`orderItem-${prod.id}`}/>
					))
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
