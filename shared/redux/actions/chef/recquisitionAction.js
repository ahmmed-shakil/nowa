import { base_url_chef } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecquisition = createAsyncThunk(
  "recquisition/get",
  async (id) => {
    try {
      const recquisitionURL = `${base_url_chef}/fetch-recquisitions/${id}`;
      const response = await axios.get(recquisitionURL);
      console.log("Get recquisition data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get recquisitions");
    }
  }
);

export const createRecquisition = createAsyncThunk(
  "recquisition/create",
  async ({ body }) => {
    try {
      const recquisitionURL = `${base_url_chef}/recquisition`;
      const response = await axios.post(recquisitionURL, body);
      console.log("Create recquisition data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create recquisition");
    }
  }
);

export const updateRecquisition = createAsyncThunk(
  "recquisition/update",
  async ({ body }, id) => {
    try {
      const recquisitionURL = `${base_url_chef}/recquisition-item/${id}`;
      const response = await axios.patch(recquisitionURL, body);
      console.log("Update recquisition data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update recquisition");
    }
  }
);

export const deleteRecquisition = createAsyncThunk(
  "recquisition/delete",
  async (id) => {
    try {
      const recquisitionURL = `${base_url_chef}/recquisition-item/${id}`;
      const response = await axios.delete(recquisitionURL, body);
      console.log("Delete recquisition data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete recquisition");
    }
  }
);
