import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const nonChargeableItemURL = `${base_url_restaurant}/nc-item`;

export const getNonChargeableItem = createAsyncThunk(
  "nonChargeableItem/get",
  async () => {
    try {
      const response = await axios.get(nonChargeableItemURL);
      console.log("Get Non- chargeable Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get Non-chargeable Item");
    }
  }
);
export const createNonChargeableItem = createAsyncThunk(
  "nonChargeableItem/create",
  async ({ body }) => {
    try {
      const response = await axios.post(nonChargeableItemURL, body);
      console.log("Create NC Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create NC Item");
    }
  }
);

export const updateNonChargeableItem = createAsyncThunk(
  "nonChargeableItem/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${nonChargeableItemURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update NC Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to Update NC Item");
    }
  }
);

export const deleteNonChargeableItem = createAsyncThunk(
  "nonChargeableItem/delete",
  async (id) => {
    try {
      const deleteURL = `${nonChargeableItemURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete NC Item data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete NC Item");
    }
  }
);
