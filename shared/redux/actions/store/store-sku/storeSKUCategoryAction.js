import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storeSKUCategoryURL = `${base_url_store}/SKU-category`;

export const getStoreSKUCategory = createAsyncThunk(
  "storeSKUCategory/get",
  async () => {
    try {
      const response = await axios.get(storeSKUCategoryURL);
      console.log("Get store SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get store SKU category");
    }
  }
);
export const createStoreSKUCategory = createAsyncThunk(
  "storeSKUCategory/create",
  async () => {
    try {
      const response = await axios.post(storeSKUCategoryURL);
      console.log("Create store SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU category");
    }
  }
);

export const updateStoreSKUCategory = createAsyncThunk(
  "storeSKUCategory/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${storeSKUCategoryURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Create store SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU category");
    }
  }
);

export const deleteStoreSKUCategory = createAsyncThunk(
  "storeSKUCategory/delete",
  async ({ data }, id) => {
    try {
      const deleteURL = `${storeSKUCategoryURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete store SKU category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete store SKU category");
    }
  }
);
