import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filtered: [],
    loading: true,
    error: null,
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
      state.loading = true;
      state.error = null;
    },
    getFilteredProducts: (state, action) => {
      const { stateType, priceValue, locationValue, propertyValue } =
        action.payload;
      state.filtered = state.products.filter((product) => {
        return (
          product.advertStatus === stateType &&
          product.price.split('.').join("") <= priceValue[1] &&
          product.price.split('.').join("") >= priceValue[0] &&
          product.country === locationValue &&
          product.advertType === propertyValue
        );
      });
    },
  },
});

export const { getProducts, getFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
