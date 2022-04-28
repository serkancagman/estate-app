import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Product/ProductSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    filteredProducts: productsReducer,
  },
});


