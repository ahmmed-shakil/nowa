import { createSlice } from "@reduxjs/toolkit";
import {
  createStorePurchase,
  deleteStorePurchase,
  getStorePurchase,
  updateStorePurchase,
} from "@/shared/redux/actions/store/purchase/purchaseAction";

export const initialState = {
  purchase: null,
  loading: null,
  error: null,
};

const storePurchaseSlice = createSlice({
  name: "purchase",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getStorePurchase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStorePurchase.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getStorePurchase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStorePurchase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStorePurchase.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createStorePurchase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStorePurchase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStorePurchase.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateStorePurchase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStorePurchase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStorePurchase.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteStorePurchase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default storePurchaseSlice.reducer;
