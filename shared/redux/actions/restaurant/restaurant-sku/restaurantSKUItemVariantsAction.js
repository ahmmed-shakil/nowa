import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const restaurantSKUItemVariantUrl = `${base_url_restaurant}/SKU-item-variant`;

export const getRestaurantSKUItemVariants = createAsyncThunk(
  "restaurantSKUItemVariant/get",
  async () => {
    try {
      const response = await axios.get(restaurantSKUItemVariantUrl);
      console.log("Get Restaurant SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get Restaurant SKU Item Variant ");
    }
  }
);

export const createRestaurantSKUItemVariant = createAsyncThunk(
  "restaurantSKUItemVariant/create",
  async ({ body }) => {
    try {
      const response = await axios.post(restaurantSKUItemVariantUrl, body);
      console.log("Create Restaurant SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create Restaurant SKU Item Variant");
    }
  }
);

export const updateRestaurantSKUItemVariant = createAsyncThunk(
  "restaurantSKUItemVariant/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${restaurantSKUItemVariantUrl}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Restaurant SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update Restaurant SKU Item Variant");
    }
  }
);

export const deleteRestaurantSKUItemVariant = createAsyncThunk(
  "restaurantSKUItemVariant/delete",
  async (id) => {
    try {
      const deleteURL = `${restaurantSKUItemVariantUrl}/${id}`;
      const response = await axios.delete(deleteURL, body);
      console.log("Delete Restaurant SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete Restaurant SKU Item Variant");
    }
  }
);
