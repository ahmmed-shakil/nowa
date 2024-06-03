import { createSlice } from "@reduxjs/toolkit";
import {
  createRestaurantSKUItem,
  deleteRestaurantSKUItem,
  getRestaurantSKUItems,
  updateRestaurantSKUItem,
} from "@/shared/redux/actions/restaurant/restaurant-sku/restaurantSKUItemsAction";

export const initialState = {
  item: null,
  loading: null,
  error: null,
};

const restaurantSKUItemSlice = createSlice({
  name: "restaurantSKUItem",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRestaurantSKUItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantSKUItems.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRestaurantSKUItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createRestaurantSKUItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurantSKUItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createRestaurantSKUItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateRestaurantSKUItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurantSKUItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateRestaurantSKUItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRestaurantSKUItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRestaurantSKUItem.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteRestaurantSKUItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSKUItemSlice.reducer;
