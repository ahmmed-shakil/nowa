import { createSlice } from "@reduxjs/toolkit";
import {
  createNonChargeableItem,
  deleteNonChargeableItem,
  getNonChargeableItem,
  updateNonChargeableItem,
} from "@/shared/redux/actions/restaurant/non-chargeable/nonChargeableItemAction";

export const initialState = {
  item: null,
  loading: null,
  error: null,
};

const nonChargeableItemSlice = createSlice({
  name: "nonChargeableItem",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getNonChargeableItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNonChargeableItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getNonChargeableItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNonChargeableItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNonChargeableItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createNonChargeableItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateNonChargeableItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNonChargeableItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateNonChargeableItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteNonChargeableItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNonChargeableItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteNonChargeableItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default nonChargeableItemSlice.reducer;
