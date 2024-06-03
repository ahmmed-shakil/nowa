import { base_url_restaurant, base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const vendorCategoryURL = `${base_url_store}/vendor-category`;
export const getVendorCategory = createAsyncThunk(
  "vendorCategory/get",
  async () => {
    try {
      const response = await axios.get(vendorCategoryURL);
      console.log("Get Vendor category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get vendor category");
    }
  }
);
export const createVendorCategory = createAsyncThunk(
  "vendorCategory/create",
  async ({ data }) => {
    try {
      const response = await axios.post(vendorCategoryURL, data);
      console.log("Create Vendor category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create vendor category");
      throw error; // Re-throw the error so it can be handled in the rejected case
    }
  }
);
// export const createVendorCategory = createAsyncThunk(
//   "vendorCategory/create",
//   async ({ data }, thunkAPI) => {
//     console.log("🚀 ~ thunkAPI:", thunkAPI);
//     console.log("🚀 ~ data225:", data);
//     try {
//       const response = await axios.post(vendorCategoryURL, data);
//       console.log("Create Vendor category data: ", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("Failed to create vendor category");
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
export const updateVendorCategory = createAsyncThunk(
  "vendorCategory/update",
  async ({ data }, id) => {
    try {
      const updateURL = `${vendorCategoryURL}/${id}`;
      const response = await axios.patch(updateURL, data);
      console.log("Update Vendor category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update vendor category");
    }
  }
);

export const deleteVendorCategory = createAsyncThunk(
  "vendorCategory/delete",
  async (id) => {
    try {
      const deleteURL = `${vendorCategoryURL}/${id}`;
      const response = await axios.delete(updateURL, data);
      console.log("Delete Vendor category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete vendor category");
    }
  }
);
