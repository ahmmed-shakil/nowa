import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storeSKUSectionURL = `${base_url_store}/SKU-section`;

export const getStoreSKUSections = createAsyncThunk(
  "storeSKUSection/get",
  async () => {
    try {
      const response = await axios.get(storeSKUSectionURL);
      console.log("Get Store SKU Section data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get Store SKU Section ");
    }
  }
);
export const createStoreSKUSection = createAsyncThunk(
  "storeSKUSection/create",
  async () => {
    try {
      const response = await axios.post(storeSKUSectionURL);
      console.log("Create store SKU Section data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU Section");
    }
  }
);

export const updateStoreSKUSection = createAsyncThunk(
  "storeSKUSection/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${storeSKUSectionURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Create store SKU Section data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU Section");
    }
  }
);

export const deleteStoreSKUSection = createAsyncThunk(
  "storeSKUSection/delete",
  async (id) => {
    try {
      const deleteURL = `${storeSKUSectionURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete store SKU Section data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete store SKU Section");
    }
  }
);
