import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Typography} from '@mui/material';
import {getTotal} from '../../slices';
import {CartTable} from '../CartTable';
import {EmptyCard} from '../EmptyCard';
import {Summary} from '../Summary';

import type {AppDispatch, RootState} from '../../store';

/** Checkout page */
export const CheckoutPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const cart = useSelector(({cart}: RootState) => cart);

	useEffect(() => {
		dispatch(getTotal());
	}, [cart, dispatch]);

	return (
		<Container maxWidth='xl'>
			<Typography variant='h3' align='center' m={4}>
				Checkout page
			</Typography>
			{!cart.cartItems.length
				? <EmptyCard />
				: <>
					<CartTable />
					<Summary />
				</>}
		</Container>
	);
};
