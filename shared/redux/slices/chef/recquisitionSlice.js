import { createSlice } from "@reduxjs/toolkit";
import {
  createRecquisition,
  deleteRecquisition,
  getRecquisition,
  updateRecquisition,
} from "../../actions/chef/recquisitionAction";

export const initialState = {
  recquisition: null,
  loading: null,
  error: null,
};

const recquisitionSlice = createSlice({
  name: "recquisition",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRecquisition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecquisition.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRecquisition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createRecquisition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRecquisition.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createRecquisition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateRecquisition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRecquisition.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateRecquisition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRecquisition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRecquisition.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteRecquisition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default recquisitionSlice.reducer;
