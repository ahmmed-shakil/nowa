import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const restaurantSKUItemUrl = `${base_url_restaurant}/SKU-item`;

export const getRestaurantSKUItems = createAsyncThunk(
  "restaurantSKUItem/get",
  async () => {
    try {
      const response = await axios.get(restaurantSKUItemUrl);
      console.log("Get Restaurant SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get Restaurant SKU Item ");
    }
  }
);

export const createRestaurantSKUItem = createAsyncThunk(
  "restaurantSKUItem/create",
  async ({ body }) => {
    try {
      const response = await axios.post(restaurantSKUItemUrl, body);
      console.log("Create Restaurant SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create Restaurant SKU Item");
    }
  }
);
export const updateRestaurantSKUItem = createAsyncThunk(
  "restaurantSKUItem/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${restaurantSKUItemUrl}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Restaurant SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update Restaurant SKU Item");
    }
  }
);

export const deleteRestaurantSKUItem = createAsyncThunk(
  "restaurantSKUItem/delete",
  async (id) => {
    try {
      const deleteURL = `${restaurantSKUItemUrl}/${id}`;
      const response = await axios.delete(deleteURL, body);
      console.log("Delete Restaurant SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete Restaurant SKU Item");
    }
  }
);
