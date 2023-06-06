"use client";
import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './features/cart/cartSlice'

// make to store 
export const store = configureStore({
    reducer: {
        cart: cardReducer
    },
})
