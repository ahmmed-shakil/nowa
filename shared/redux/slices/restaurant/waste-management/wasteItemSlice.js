import { createSlice } from "@reduxjs/toolkit";
import {
  createWasteManagementItem,
  deleteWasteManagementItem,
  getWasteManagementItems,
  updateWasteManagementItem,
} from "@/shared/redux/actions/restaurant/waste-management/wasteItemsAction";

export const initialState = {
  item: null,
  loading: null,
  error: null,
};

const wasteItemSlice = createSlice({
  name: "wasteItem",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getWasteManagementItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWasteManagementItems.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getWasteManagementItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createWasteManagementItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWasteManagementItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createWasteManagementItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateWasteManagementItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWasteManagementItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateWasteManagementItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteWasteManagementItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWasteManagementItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteWasteManagementItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wasteItemSlice.reducer;
