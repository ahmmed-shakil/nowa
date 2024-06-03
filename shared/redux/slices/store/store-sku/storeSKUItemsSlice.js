import { createSlice } from "@reduxjs/toolkit";
import {
  createStoreSKUItem,
  deleteStoreSKUItem,
  getStoreSKUItems,
  updateStoreSKUItem,
} from "@/shared/redux/actions/store/store-sku/storeSKUItemsAcion";

export const initialState = {
  item: null,
  loading: null,
  error: null,
};

const storeSKUItemSlice = createSlice({
  name: "storeSKUItem",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getStoreSKUItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreSKUItems.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getStoreSKUItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStoreSKUItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStoreSKUItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createStoreSKUItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStoreSKUItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStoreSKUItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateStoreSKUItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStoreSKUItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStoreSKUItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteStoreSKUItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default storeSKUItemSlice.reducer;
