import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import type { ProductType } from '~/Types';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        ADD_TO_CART: (state, action) => {
            const item: any = state.find((el: ProductType) => el.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                //@ts-ignore -- idk whats is this err [ to back again]
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        DELETE_FROM_CART: (state, action) => {
            return state.filter((el: ProductType) => el.id !== action.payload.id)
        },
        IncreaseQuantity: (state, action) => {
            const item: any = state.find((el: ProductType) => el.id === action.payload.id);
            item.quantity === 5 ? (item.quantity = 4) : (item.quantity += 1);
        },
        DecreaseQuantity: (state, action) => {
            const item: any = state.find((el: ProductType) => el.id === action.payload.id);
            item.quantity === 0 ? (item.quantity = 1) : (item.quantity -= 1);
        }
    },
})

export const { ADD_TO_CART, DELETE_FROM_CART, IncreaseQuantity, DecreaseQuantity } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state

export default cartSlice.reducer