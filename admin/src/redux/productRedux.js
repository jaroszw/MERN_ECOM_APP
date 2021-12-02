import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },

    getProductFailure: (status) => {
      status.isFetchings = false;
      status.error = true;
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },

    deleteProductFailure: (status) => {
      status.isFetchings = false;
      status.error = true;
    },

    // Upadte
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },

    updateProductFailure: (status) => {
      status.isFetchings = false;
      status.error = true;
    },

    //ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },

    addProductFailure: (status) => {
      status.isFetchings = false;
      status.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
