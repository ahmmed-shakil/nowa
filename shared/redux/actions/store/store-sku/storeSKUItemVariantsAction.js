import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storeSKUItemVariantURL = `${base_url_store}/SKU-item-variant`;

export const getStoreSKUItemVariants = createAsyncThunk(
  "storeSKUItemVariant/get",
  async () => {
    try {
      const response = await axios.get(storeSKUItemVariantURL);
      console.log("Get store SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get store SKU Item Variant ");
    }
  }
);
export const createStoreSKUItemVariant = createAsyncThunk(
  "storeSKUItemVariant/create",
  async () => {
    try {
      const response = await axios.post(storeSKUItemVariantURL);
      console.log("Create store SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU Item Variant");
    }
  }
);

export const updateStoreSKUItemVariant = createAsyncThunk(
  "storeSKUItemVariant/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${storeSKUItemVariantURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Create store SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create store SKU Item Variant");
    }
  }
);

export const deleteStoreSKUItemVariant = createAsyncThunk(
  "storeSKUItemVariant/delete",
  async (id) => {
    try {
      const deleteURL = `${storeSKUItemVariantURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete store SKU Item Variant data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete store SKU Item Variant");
    }
  }
);
