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

    getProdyctSuccess: (state, action) => {
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

    deleteProdyctSuccess: (state, action) => {
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
  },
});

export const {
  getProductStart,
  getProdyctSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProdyctSuccess,
  deleteProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
