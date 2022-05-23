import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCTS_API_URL} from '../constants';

const initialState = {
	items: [],
	status: null as string | null
};

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const {data} = await axios.get(PRODUCTS_API_URL);
		return data;
	}
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => builder
		.addCase(getProducts.pending, (state) => {
			state.status = 'pending';
		})
		.addCase(getProducts.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		})
		.addCase(getProducts.rejected, (state) => {
			state.status = 'error';
		})
});
