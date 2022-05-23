import React from 'react';
import {Container, Typography} from '@mui/material';

/** 404 page */
export const NotFoundPage = () => (
	<Container>
		<Typography variant='h1' align='center' mt={4}>
			404
		</Typography>
		<Typography variant='h6' align='center'>
			Page not found
		</Typography>
	</Container>
);
