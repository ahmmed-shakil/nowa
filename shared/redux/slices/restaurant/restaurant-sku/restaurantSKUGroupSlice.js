import { createSlice } from "@reduxjs/toolkit";
import {
  createRestaurantSKUGroup,
  deleteRestaurantSKUGroup,
  getRestaurantSKUGroup,
  updateRestaurantSKUGroup,
} from "@/shared/redux/actions/restaurant/restaurant-sku/restaurantSKUGroupAction";

export const initialState = {
  group: null,
  loading: null,
  error: null,
};

const restaurantSKUGroupSlice = createSlice({
  name: "restaurantSKUGroup",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRestaurantSKUGroup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantSKUGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRestaurantSKUGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createRestaurantSKUGroup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurantSKUGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createRestaurantSKUGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateRestaurantSKUGroup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurantSKUGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateRestaurantSKUGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRestaurantSKUGroup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRestaurantSKUGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteRestaurantSKUGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSKUGroupSlice.reducer;
