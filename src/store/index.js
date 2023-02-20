import { productsApi } from "@/pages/api/testApiSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlices from './slices/cartItems'

const store = configureStore({
    reducer: {
        cartItems:  cartItemsSlices,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export default store;

