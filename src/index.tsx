import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {App} from './components/App';
import {store} from './store';

const theme = responsiveFontSizes(createTheme());
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
