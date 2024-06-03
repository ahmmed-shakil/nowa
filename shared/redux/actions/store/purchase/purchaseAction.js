import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const purchaseURL = `${base_url_store}/purchase`;
export const getStorePurchase = createAsyncThunk("purchase/get", async () => {
  try {
    const response = await axios.get(purchaseURL);
    console.log("Get Store Purchase data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to get store purchase data");
  }
});

export const createStorePurchase = createAsyncThunk(
  "purchase/create",
  async ({ data }) => {
    try {
      const response = await axios.post(purchaseURL, data);
      console.log("Create Store Purchase data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get create purchase data");
    }
  }
);
export const updateStorePurchase = createAsyncThunk(
  "purchase/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${purchaseURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Update Store Purchase data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update store purchase data");
    }
  }
);
export const deleteStorePurchase = createAsyncThunk(
  "purchase/delete",
  async ({ data }, id) => {
    try {
      const deleteURL = `${purchaseURL}/${id}`;
      const response = await axios.get(deleteURL);
      console.log("Delete Store Purchase data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete store purchase data");
    }
  }
);
