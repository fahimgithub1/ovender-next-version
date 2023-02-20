import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlices from './slices/cartItems'

const store = configureStore({
    reducer: {
        cartItems:  cartItemsSlices
    }
})

export default store;

