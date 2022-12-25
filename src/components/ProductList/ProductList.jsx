import React, { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

const products = [
	{id: '1', title: 'Jeans', price: 120, description: 'Color blue'},
	{id: '2', title: 'Jacket', price: 150, description: 'Color green'},
	{id: '3', title: 'Jeans 2', price: 110, description: 'Color black'}
];

const getTotalPrice = (items = []) => {
	return items.reduce((acc, item) => {
		return acc += item.price;
	}, 0);
}

const ProductList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const {tg} = useTelegram();

	const onAdd = (product) => {
		const alreadyAdded = addedItems.find(item => item.id === product.id);
		let newItems = [];

		if(alreadyAdded) {
			newItems = addedItems.filter(item => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}

		setAddedItems(newItems);

		if(newItems.length === 0){
			tg.MainButton.hode();
		}else{
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Buy ${getTotalPrice(newItems)}`
			});
		}
	}

	return (
		<div className={'list'}>
			{products.map(item => {
				<ProductItem 
					product={item}
					onAdd={onAdd}
					className={'item'}
				/>
			})}
		</div>
	)
}

export default ProductList