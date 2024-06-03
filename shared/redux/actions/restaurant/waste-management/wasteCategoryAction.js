import { data } from "@/shared/data/advancedui/userlist";
import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const wasteCategoryURL = `${base_url_restaurant}/common/waste-management`;
export const createWasteManagementCategory = createAsyncThunk(
  "wasteCategory/create",
  async ({ body }) => {
    try {
      const response = await axios.post(wasteCategoryURL, body);
      console.log("Create Waste category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create waste management category");
    }
  }
);

export const getWasteManagementCategory = createAsyncThunk(
  "wasteCategory/get",
  async () => {
    try {
      const response = await axios.get(wasteCategoryURL);
      console.log("Get Waste category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get waste management category");
    }
  }
);

export const updateWasteManagementCategory = createAsyncThunk(
  "wasteCategory/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${wasteCategoryURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Waste category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update waste management category");
    }
  }
);

export const deleteWasteManagementCategory = createAsyncThunk(
  "wasteCategory/delete",
  async (id) => {
    try {
      const deleteURL = `${wasteCategoryURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete Waste category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete waste management category");
    }
  }
);
