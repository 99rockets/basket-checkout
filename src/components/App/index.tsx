import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import {Global} from '@emotion/react';
import {Header} from '../Header';
import {Footer} from '../Footer';
import {MainPage} from '../MainPage';
import {CheckoutPage} from '../CheckoutPage';
import {NotFoundPage} from '../NotFoundPage';

import {GlobalStyles} from './styled';

/** Main application container */
export const App = () => (
	<div className='App'>
		<Global styles={GlobalStyles} />
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/checkout' element={<CheckoutPage />} />
				<Route path='/not-found' element={<NotFoundPage />} />
				<Route path='*' element={<Navigate to='/not-found' replace />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</div>
);
