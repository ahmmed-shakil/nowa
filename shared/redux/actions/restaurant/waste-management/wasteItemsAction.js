import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const wasteItemUrl = `${base_url_restaurant}/common/waste-item`;

export const getWasteManagementItems = createAsyncThunk(
  "wasteItem/get",
  async () => {
    try {
      const response = await axios.get(wasteItemUrl);
      console.log("Get Waste Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get waste management category");
    }
  }
);
export const createWasteManagementItem = createAsyncThunk(
  "wasteItem/create",
  async ({ body }) => {
    try {
      const response = await axios.post(wasteItemUrl, body);
      console.log("Create Waste Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create waste management Item");
    }
  }
);

export const updateWasteManagementItem = createAsyncThunk(
  "wasteItem/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${wasteItemUrl}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Waste Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to Update waste management Item");
    }
  }
);

export const deleteWasteManagementItem = createAsyncThunk(
  "wasteItem/delete",
  async (id) => {
    try {
      const deleteURL = `${wasteItemUrl}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete Waste Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete waste management Item");
    }
  }
);
