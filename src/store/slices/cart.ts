import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import type { ProductType } from '~/Types';


const initialState: Array<ProductType> = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action: PayloadAction<ProductType>) => {
            const newItem = action.payload;
            const existingItem = state.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.push(newItem);
            }
        },
        DELETE_FROM_CART: (state, action: PayloadAction<number>) => {
            const idToRemove = action.payload;
            return state = state.filter(item => item.id !== idToRemove);
        },
        UPDATE_QUANTITY: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
        CLEAR_CART: state => {
            return state = [];
        },

    },
})

export const { ADD_TO_CART, DELETE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART } = cartSlice.actions

export const selectCart = (state: RootState) => state

export default cartSlice.reducer