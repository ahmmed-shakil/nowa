import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const nonChargeableCategoryURL = `${base_url_restaurant}/non-chargable-category`;

export const getNonChargeableCategory = createAsyncThunk(
  "nonChargeableCategory/get",
  async () => {
    try {
      const response = await axios.get(nonChargeableCategoryURL);
      console.log("Get Non- chargeable category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get Non-chargeable category");
    }
  }
);

export const createNonChargeableCategory = createAsyncThunk(
  "nonChargeableCategory/create",
  async ({ body }) => {
    try {
      const response = await axios.post(nonChargeableCategoryURL, body);
      console.log("Create NC category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create NC category");
    }
  }
);

export const updateNonChargeableCategory = createAsyncThunk(
  "nonChargeableCategory/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${nonChargeableCategoryURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update NC category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update NC category");
    }
  }
);

export const deleteNonChargeableCategory = createAsyncThunk(
  "nonChargeableCategory/update",
  async (id) => {
    try {
      const deleteURL = `${nonChargeableCategoryURL}/${id}`;
      const response = await axios.delete(updateURL, body);
      console.log("Delete NC category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete NC category");
    }
  }
);
