import { createSlice } from "@reduxjs/toolkit";
import {
  createWasteManagementCategory,
  deleteWasteManagementCategory,
  getWasteManagementCategory,
  updateWasteManagementCategory,
} from "@/shared/redux/actions/restaurant/waste-management/wasteCategoryAction";

export const initialState = {
  category: null,
  loading: null,
  error: null,
};

const wasteCategorySlice = createSlice({
  name: "wasteCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getWasteManagementCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWasteManagementCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getWasteManagementCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createWasteManagementCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWasteManagementCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createWasteManagementCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateWasteManagementCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWasteManagementCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateWasteManagementCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteWasteManagementCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWasteManagementCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteWasteManagementCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wasteCategorySlice.reducer;
