import { createSlice } from "@reduxjs/toolkit";
import {
  createStoreSKUCategory,
  deleteStoreSKUCategory,
  getStoreSKUCategory,
  updateStoreSKUCategory,
} from "@/shared/redux/actions/store/store-sku/storeSKUCategoryAction";

export const initialState = {
  category: null,
  loading: null,
  error: null,
};

const storeSKUCategorySlice = createSlice({
  name: "storeSKUCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getStoreSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getStoreSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStoreSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStoreSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createStoreSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStoreSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStoreSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateStoreSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStoreSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStoreSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteStoreSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default storeSKUCategorySlice.reducer;
