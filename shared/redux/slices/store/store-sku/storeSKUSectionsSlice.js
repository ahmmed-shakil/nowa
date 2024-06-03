import { createSlice } from "@reduxjs/toolkit";
import {
  createStoreSKUSection,
  deleteStoreSKUSection,
  getStoreSKUSections,
  updateStoreSKUSection,
} from "@/shared/redux/actions/store/store-sku/storeSKUSectionsAction";

export const initialState = {
  section: null,
  loading: null,
  error: null,
};

const storeSKUSectionVariantSlice = createSlice({
  name: "storeSKUSectionVariant",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getStoreSKUSections.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreSKUSections.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getStoreSKUSections.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStoreSKUSection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStoreSKUSection.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createStoreSKUSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStoreSKUSection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStoreSKUSection.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateStoreSKUSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStoreSKUSection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStoreSKUSection.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteStoreSKUSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default storeSKUSectionVariantSlice.reducer;
