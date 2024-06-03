import { createSlice } from "@reduxjs/toolkit";
import {
  createVendorCategory,
  deleteVendorCategory,
  getVendorCategory,
  updateVendorCategory,
} from "@/shared/redux/actions/store/vendor/vendorCategoryAction";

export const initialState = {
  category: [],
  loading: null,
  error: null,
};

const vendorCategorySlice = createSlice({
  name: "vendorCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getVendorCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVendorCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload.data;
      })
      .addCase(getVendorCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createVendorCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createVendorCategory.fulfilled, (state, action) => {
        console.log("🚀 ~ .addCase ~ action:", action);
        state.loading = false;
        state.category = [...state.category, action.payload.data];
      })
      .addCase(createVendorCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateVendorCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVendorCategory.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming action.payload.data contains the updated category
        const updatedCategory = action.payload.data;
        const index = state.category.findIndex(
          (cat) => cat.id === updatedCategory.id
        );
        if (index !== -1) {
          state.category[index] = updatedCategory;
        }
      })
      .addCase(updateVendorCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteVendorCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVendorCategory.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload.data.id; // Assuming action.payload.data contains the ID of the deleted category
        state.category = state.category.filter((cat) => cat.id !== id);
      })
      .addCase(deleteVendorCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// builder

export default vendorCategorySlice.reducer;
