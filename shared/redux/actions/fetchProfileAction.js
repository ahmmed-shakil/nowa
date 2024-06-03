import { base_url } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetch",
  async ({ email, type }) => {
    console.log("🚀 ~ type:", type);
    console.log("🚀 ~ email:", email);
    try {
      const fetchUrl = `${base_url}/profile?email=${email}&userType=${type}`;
      const response = await axios.get(fetchUrl);
      console.log("fetch prof data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  }
);
