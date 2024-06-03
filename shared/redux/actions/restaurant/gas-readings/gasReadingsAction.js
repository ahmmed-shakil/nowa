import { base_url_restaurant } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const gasReadingsURL = `${base_url_restaurant}/gas-reading`;

export const getGasReadings = createAsyncThunk("gasReadings/get", async () => {
  try {
    const response = await axios.get(gasReadingsURL);
    console.log("Get gas readings data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to get gas readings");
  }
});

export const createGasReading = createAsyncThunk(
  "gasReadings/create",
  async ({ body }) => {
    try {
      const response = await axios.post(gasReadingsURL, body);
      console.log("Create Gas Readings: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create gas readings");
    }
  }
);

export const updateGasReading = createAsyncThunk(
  "gasReadings/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${gasReadingsURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update Gas Readings: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update gas readings");
    }
  }
);

export const deleteGasReading = createAsyncThunk(
  "gasReadings/delete",
  async (id) => {
    try {
      const deleteURL = `${gasReadingsURL}/${id}`;
      const response = await axios.delete(updateURL);
      console.log("Delete Gas Readings: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to delete gas readings");
    }
  }
);
