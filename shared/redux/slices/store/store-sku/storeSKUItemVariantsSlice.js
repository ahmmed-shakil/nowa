import { createSlice } from "@reduxjs/toolkit";
import {
  createStoreSKUItemVariant,
  deleteStoreSKUItemVariant,
  getStoreSKUItemVariants,
  updateStoreSKUItemVariant,
} from "@/shared/redux/actions/store/store-sku/storeSKUItemVariantsAction";

export const initialState = {
  itemVariant: null,
  loading: null,
  error: null,
};

const storeSKUItemVariantSlice = createSlice({
  name: "storeSKUItemVariant",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getStoreSKUItemVariants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreSKUItemVariants.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getStoreSKUItemVariants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createStoreSKUItemVariant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStoreSKUItemVariant.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createStoreSKUItemVariant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStoreSKUItemVariant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStoreSKUItemVariant.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateStoreSKUItemVariant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStoreSKUItemVariant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStoreSKUItemVariant.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteStoreSKUItemVariant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default storeSKUItemVariantSlice.reducer;
