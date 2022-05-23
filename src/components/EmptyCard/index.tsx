import React from 'react';
import {Typography} from '@mui/material';

import {
	StyledEmptyCard,
	StyledLink,
	StyledIcon
} from './styled';

/** Empty cart */
export const EmptyCard = () => (
	<StyledEmptyCard>
		<Typography variant='overline' gutterBottom>Your cart is currently empty</Typography>
		<StyledLink to='/'>
			<StyledIcon fontSize='medium' />
			<Typography variant='overline'>Start Shopping</Typography>
		</StyledLink>
	</StyledEmptyCard>
);
