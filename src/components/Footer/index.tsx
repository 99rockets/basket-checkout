import React from 'react';
import {Link, Typography} from '@mui/material';
import {GITHUB_URL} from '../../constants';

import {StyledFooter} from './styled';

/** Application footer */
export const Footer = () => (
	<StyledFooter>
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			<Link
				target='_blank'
				color='inherit'
				href={GITHUB_URL}
			>
				99rockets
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	</StyledFooter>
);
