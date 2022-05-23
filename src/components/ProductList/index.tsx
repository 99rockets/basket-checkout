import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';
import {Grid, Typography} from '@mui/material';
import {addToCart} from '../../slices';

import {
	StyledCard,
	StyledCardContent,
	StyledCardMedia,
	StyledCardActions,
	StyledButton
} from './styled';

import type {AppDispatch} from '../../store';
import type {Product} from '../../types';
import type {Props} from './types';

/** List of products */
export const ProductList = ({products}: Props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const addToCartHandler = (product: Product) => {
		dispatch(addToCart(product));
		navigate('/checkout');
	};

	return (
		<Grid container spacing={4}>
			{products.map((product) => {
				const {id, image, title, price} = product;

				return (
					<Grid item key={`GridItem-${id}`} xs={12} sm={6} md={4}>
						<StyledCard raised>
							<StyledCardContent>
								<StyledCardMedia
									component='img'
									image={image}
									title={title}
								/>
								<Typography
									variant='overline'
									component='h2'
									gutterBottom
								>
									{title}
								</Typography>
								<Typography variant='body1'>
									${price}
								</Typography>
							</StyledCardContent>
							<StyledCardActions>
								<StyledButton
									size='large'
									variant='contained'
									onClick={() => addToCartHandler(product)}
									fullWidth
								>
									Add to card
								</StyledButton>
							</StyledCardActions>
						</StyledCard>
					</Grid>
				);
			})}
		</Grid>
	);
};
