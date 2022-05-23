import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Typography} from '@mui/material';
import {clearCart} from '../../slices';

import {
	StyledSummary,
	StyledClearButton,
	StyledContainer,
	StyledSubtotal
} from './styled';

import type {AppDispatch, RootState} from '../../store';

/** Summary */
export const Summary = () => {
	const {cartAmount} = useSelector(({cart}: RootState) => cart);
	const dispatch = useDispatch<AppDispatch>();

	const handleClearCart = () => dispatch(clearCart());

	return (
		<StyledSummary>
			<StyledClearButton
				size='large'
				variant='contained'
				onClick={() => handleClearCart()}
			>
				Clear Cart
			</StyledClearButton>
			<StyledContainer>
				<StyledSubtotal>
					<Typography variant='h6' mb={2}>Subtotal</Typography>
					<Typography variant='h6' mb={2}>${cartAmount}</Typography>
				</StyledSubtotal>
				<Button
					variant='contained'
					size='large'
					fullWidth
				>
					Check out
				</Button>
			</StyledContainer>
		</StyledSummary>
	);
};
