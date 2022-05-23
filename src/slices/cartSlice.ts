import {createSlice} from '@reduxjs/toolkit';

import type {CartItem} from '../types';

const getCartItems = (): CartItem[] => localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems') || '{}')
	: [];

const initialState = {
	cartItems: getCartItems(),
	cartQuantity: 0,
	cartAmount: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const existingIndex = state.cartItems.findIndex(({id}) => id === action.payload.id);

			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {
					...state.cartItems[existingIndex],
					quantity: state.cartItems[existingIndex].quantity + 1
				};
			} else {
				state.cartItems.push({
					...action.payload,
					quantity: 1
				});
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeFromCart(state, action) {
			state.cartItems.map((cartItem) => {
				if (cartItem.id === action.payload) {
					state.cartItems = state.cartItems.filter(({id}) => id !== cartItem.id);
				}

				localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

				return state;
			});
		},
		decreaseCartItem(state, action) {
			const itemIndex = state.cartItems.findIndex(({id}) => id === action.payload);

			if (state.cartItems[itemIndex].quantity > 1) {
				state.cartItems[itemIndex].quantity -= 1;
			} else if (state.cartItems[itemIndex].quantity === 1) {
				state.cartItems = state.cartItems.filter(({id}) => id !== action.payload.id);
			}

			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		clearCart(state) {
			state.cartItems = [];
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		getTotal(state) {
			const {total, quantity} = state.cartItems.reduce((cartTotal, {price, quantity}) => {
				cartTotal.total += (price * quantity);
				cartTotal.quantity += quantity;

				return cartTotal;
			}, {
				total: 0,
				quantity: 0
			});
			const formattedTotal = parseFloat(total.toFixed(2));

			state.cartQuantity = quantity;
			state.cartAmount = formattedTotal;
		}
	}
});

export const {
	addToCart,
	removeFromCart,
	decreaseCartItem,
	clearCart,
	getTotal
} = cartSlice.actions;
