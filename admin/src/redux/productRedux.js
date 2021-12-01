import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
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

    getProductFailure: (status, action) => {
      status.isFetchings = false;
      status.error = true;
    },
  },
});

export const { getProductStart, getProdyctSuccess, getProductFailure } =
  productSlice.actions;
export default productSlice.reducer;
