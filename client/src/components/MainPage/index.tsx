import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircularProgress} from '@mui/material';
import {getProducts} from '../../slices';
import {ProductList} from '../ProductList';

import {StyledContainer} from './styled';

import type {AppDispatch, RootState} from '../../store';

/** Main page */
export const MainPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {items, status} = useSelector(({products}: RootState) => products);
	const isSuccess = status === 'success';
	const isPending = status === 'pending';

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<StyledContainer maxWidth='xl'>
			{isSuccess && <ProductList products={items} />}
			{isPending && <CircularProgress />}
			{(!isSuccess && !isPending) && <div>Service is temporarily unavailable</div>}
		</StyledContainer>
	);
};
