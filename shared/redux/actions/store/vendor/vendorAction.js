import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const vendorURL = `${base_url_store}/vendor`;
export const getVendor = createAsyncThunk("vendor/get", async () => {
  try {
    const response = await axios.get(vendorURL);
    console.log("Get Vendor data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to get vendor");
  }
});
export const createVendor = createAsyncThunk(
  "vendor/create",
  async ({ data }) => {
    try {
      const response = await axios.post(vendorURL, data);
      console.log("Create Vendor Category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create vendor");
    }
  }
);
export const updateVendor = createAsyncThunk(
  "vendor/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${vendorURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Update Vendor  data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update vendor ");
    }
  }
);

export const deleteVendor = createAsyncThunk("vendor/delete", async (id) => {
  try {
    const deleteURL = `${vendorURL}/${id}`;
    const response = await axios.delete(updateURL, data);
    console.log("Delete Vendor  data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to delete vendor ");
  }
});
