import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const restaurantSKUGroupURL = `${base_url_restaurant}/SKU-group`;

export const getRestaurantSKUGroup = createAsyncThunk(
  "restaurantSKUGroup/get",
  async () => {
    try {
      const response = await axios.get(restaurantSKUGroupURL);
      console.log("Get restaurant SKU Group data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get restaurant SKU Group");
    }
  }
);
export const createRestaurantSKUGroup = createAsyncThunk(
  "restaurantSKUGroup/create",
  async ({ body }) => {
    try {
      const response = await axios.post(restaurantSKUGroupURL, body);
      console.log("Create Restaurant SKU Group data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create Restaurant SKU Group");
    }
  }
);
export const updateRestaurantSKUGroup = createAsyncThunk(
  "restaurantSKUGroup/update",
  async ({ body }) => {
    try {
      const updateURL = `${restaurantSKUGroupURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Restaurant SKU Group data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update Restaurant SKU Group");
    }
  }
);
export const deleteRestaurantSKUGroup = createAsyncThunk(
  "restaurantSKUGroup/delete",
  async ({ body }) => {
    try {
      const deleteURL = `${restaurantSKUGroupURL}/${id}`;
      const response = await axios.delete(deleteURL, body);
      console.log("Delete Restaurant SKU Group data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete Restaurant SKU Group");
    }
  }
);
