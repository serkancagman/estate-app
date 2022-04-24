import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: true,
        error: null,
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
            state.loading = true;
            state.error = null;
            
        }
    }
});


export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;