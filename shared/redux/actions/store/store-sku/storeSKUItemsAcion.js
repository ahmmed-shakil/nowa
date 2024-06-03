import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storeSKUItemURL = `${base_url_store}/SKU-item`;

export const getStoreSKUItems = createAsyncThunk(
  "storeSKUItem/get",
  async () => {
    try {
      const response = await axios.get(storeSKUItemURL);
      console.log("Get Store SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get Store SKU Item ");
    }
  }
);
export const createStoreSKUItem = createAsyncThunk(
  "storeSKUItem/create",
  async () => {
    try {
      const response = await axios.post(storeSKUItemURL);
      console.log("Create store SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU Item");
    }
  }
);

export const updateStoreSKUItem = createAsyncThunk(
  "storeSKUItem/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${storeSKUItemURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Create store SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU Item");
    }
  }
);

export const deleteStoreSKUItem = createAsyncThunk(
  "storeSKUItem/delete",
  async (id) => {
    try {
      const deleteURL = `${storeSKUItemURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete store SKU Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete store SKU Item");
    }
  }
);
