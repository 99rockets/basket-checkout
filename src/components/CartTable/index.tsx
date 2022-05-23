import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	Button,
	ButtonGroup,
	Paper,
	Typography,
	TableContainer,
	TableBody,
	TableHead,
	TableCell,
	TableRow
} from '@mui/material';
import {
	addToCart,
	removeFromCart,
	decreaseCartItem
} from '../../slices';

import {
	StyledTable,
	StyledProduct,
	StyledProductImage
} from './styled';

import type {AppDispatch, RootState} from '../../store';
import type {Product} from '../../types';

/** Cart table */
export const CartTable = () => {
	const dispatch = useDispatch<AppDispatch>();
	const cart = useSelector(({cart}: RootState) => cart);

	const handleAddToCart = (product: Product) => dispatch(addToCart(product));
	const handleRemoveFromCart = (id: string) => dispatch(removeFromCart(id));
	const handleDecreaseCart = (id: string) => dispatch(decreaseCartItem(id));

	const calculateItemTotal = (price: number, quantity: number) => (
		parseFloat((price * quantity).toFixed(2))
	);

	return (
		<TableContainer component={Paper}>
			<StyledTable>
				<TableHead>
					<TableRow>
						<TableCell>Product</TableCell>
						<TableCell align='center'>Price</TableCell>
						<TableCell align='center'>Quantity</TableCell>
						<TableCell align='center'>Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{cart.cartItems.map((cartItem) => {
						const {
							id,
							image,
							title,
							description,
							price,
							quantity
						} = cartItem;

						return (
							<TableRow key={id}>
								<TableCell component='th' scope='row'>
									<StyledProduct>
										<StyledProductImage src={image} alt={title} />
										<div>
											<Typography variant='h6'>{title}</Typography>
											<p>{description}</p>
											<Button size='large' onClick={() => handleRemoveFromCart(id)}>
												Remove
											</Button>
										</div>
									</StyledProduct>
								</TableCell>
								<TableCell align='center'>${price}</TableCell>
								<TableCell align='center'>
									<ButtonGroup size='large'>
										<Button onClick={() => handleDecreaseCart(id)}>-</Button>
										<Button disabled>{quantity}</Button>
										<Button onClick={() => handleAddToCart(cartItem)}>+</Button>
									</ButtonGroup>
								</TableCell>
								<TableCell align='center'>${calculateItemTotal(price, quantity)}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</StyledTable>
		</TableContainer>
	);
};
