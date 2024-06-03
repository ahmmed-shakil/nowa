import { createSlice } from "@reduxjs/toolkit";
import {
  createVendor,
  deleteVendor,
  getVendor,
  updateVendor,
} from "@/shared/redux/actions/store/vendor/vendorAction";

export const initialState = {
  vendorData: null,
  loading: null,
  error: null,
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default vendorSlice.reducer;
