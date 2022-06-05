import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=1'

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(async () => {
		const {data} = await axios.get(API);
		setProducts(data);
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map(product => (
						<ProductItem key={product.id} product={product} />
					))
				}
			</div>
		</section>
	);
}

