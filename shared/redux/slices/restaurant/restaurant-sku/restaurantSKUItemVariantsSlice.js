import { createSlice } from "@reduxjs/toolkit";
import {
  createRestaurantSKUItemVariant,
  deleteRestaurantSKUItemVariant,
  getRestaurantSKUItemVariants,
  updateRestaurantSKUItemVariant,
} from "@/shared/redux/actions/restaurant/restaurant-sku/restaurantSKUItemVariantsAction";

export const initialState = {
  itemVariant: null,
  loading: null,
  error: null,
};

const restaurantSKUItemVariantSlice = createSlice({
  name: "restaurantSKUItemVariant",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRestaurantSKUItemVariants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantSKUItemVariants.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getRestaurantSKUItemVariants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createRestaurantSKUItemVariant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurantSKUItemVariant.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createRestaurantSKUItemVariant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateRestaurantSKUItemVariant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurantSKUItemVariant.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateRestaurantSKUItemVariant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteRestaurantSKUItemVariant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRestaurantSKUItemVariant.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteRestaurantSKUItemVariant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSKUItemVariantSlice.reducer;
