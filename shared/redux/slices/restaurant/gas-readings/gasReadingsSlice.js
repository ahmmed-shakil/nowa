import { createSlice } from "@reduxjs/toolkit";
import {
  createGasReading,
  deleteGasReading,
  getGasReadings,
  updateGasReading,
} from "@/shared/redux/actions/restaurant/gas-readings/gasReadingsAction";

export const initialState = {
  readings: null,
  loading: null,
  error: null,
};

const gasReadingsSlice = createSlice({
  name: "gasReadings",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getGasReadings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGasReadings.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getGasReadings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createGasReading.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createGasReading.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createGasReading.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateGasReading.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateGasReading.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateGasReading.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteGasReading.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteGasReading.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteGasReading.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default gasReadingsSlice.reducer;
