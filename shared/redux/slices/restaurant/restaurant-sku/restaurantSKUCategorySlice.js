import { createSlice } from "@reduxjs/toolkit";
import {
  createRestaurantSKUCategory,
  deleteRestaurantSKUCategory,
  getRestaurantSKUCategory,
  updateRestaurantSKUCategory,
} from "@/shared/redux/actions/restaurant/restaurant-sku/restaurantSKUCategoryAction";

export const initialState = {
  category: null,
  loading: null,
  error: null,
};

const restaurantSKUCategorySlice = createSlice({
  name: "restaurantSKUCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRestaurantSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRestaurantSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createRestaurantSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurantSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createRestaurantSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateRestaurantSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurantSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateRestaurantSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRestaurantSKUCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRestaurantSKUCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteRestaurantSKUCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSKUCategorySlice.reducer;
