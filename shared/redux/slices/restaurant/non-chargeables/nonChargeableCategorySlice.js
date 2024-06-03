import { createSlice } from "@reduxjs/toolkit";
import {
  createNonChargeableCategory,
  deleteNonChargeableCategory,
  getNonChargeableCategory,
  updateNonChargeableCategory,
} from "@/shared/redux/actions/restaurant/non-chargeable/nonChargeableCategoryAction";

export const initialState = {
  category: null,
  loading: null,
  error: null,
};

const nonChargeableCategorySlice = createSlice({
  name: "nonChargeableCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getNonChargeableCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNonChargeableCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getNonChargeableCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNonChargeableCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNonChargeableCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createNonChargeableCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateNonChargeableCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNonChargeableCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateNonChargeableCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteNonChargeableCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNonChargeableCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteNonChargeableCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nonChargeableCategorySlice.reducer;
