import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import {AppBar, Badge} from '@mui/material';

import {
	StyledLogo,
	StyledToolbar,
	StyledCartIcon
} from './styled';

import type {RootState} from '../../store';

/** Application header */
export const Header = () => {
	const navigate = useNavigate();
	const {cartQuantity} = useSelector(({cart}: RootState) => cart);

	return (
		<AppBar position='relative'>
			<StyledToolbar>
				<StyledLogo
					variant='h6'
					color='inherit'
					onClick={() => navigate('/')}
					noWrap
				>
					E-commerce application
				</StyledLogo>
				<Badge color='secondary' badgeContent={cartQuantity}>
					<StyledCartIcon onClick={() => navigate('/checkout')} />
				</Badge>
			</StyledToolbar>
		</AppBar>
	);
};
