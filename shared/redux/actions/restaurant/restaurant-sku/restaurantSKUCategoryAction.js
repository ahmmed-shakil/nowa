import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const restaurantSKUCategoryURL = `${base_url_restaurant}/SKU-category`;

export const getRestaurantSKUCategory = createAsyncThunk(
  "restaurantSKUCategory/get",
  async () => {
    try {
      const response = await axios.get(restaurantSKUCategoryURL);
      console.log("Get restaurant SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get restaurant SKU category");
    }
  }
);
export const createRestaurantSKUCategory = createAsyncThunk(
  "restaurantSKUCategory/create",
  async ({ body }) => {
    try {
      const response = await axios.post(restaurantSKUCategoryURL, body);
      console.log("Create Restaurant SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create Restaurant SKU category");
    }
  }
);
export const updateRestaurantSKUCategory = createAsyncThunk(
  "restaurantSKUCategory/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${restaurantSKUCategoryURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Restaurant SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update Restaurant SKU category");
    }
  }
);
export const deleteRestaurantSKUCategory = createAsyncThunk(
  "restaurantSKUCategory/delete",
  async (id) => {
    try {
      const deleteURL = `${restaurantSKUCategoryURL}/${id}`;
      const response = await axios.delete(deleteURL, body);
      console.log("Delete Restaurant SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete Restaurant SKU category");
    }
  }
);
