// Import necessary functions
import { base_url_admin } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Replace with your backend API endpoints
const LOGIN_URL = `${base_url_admin}/login`;
const LOGOUT_URL = "/api/logout";

// Define the login action (async thunk)
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, credentials);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get issue data");
    }
  }
);

// Define the logout action (async thunk)
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get(LOGOUT_URL);
    // Handle successful logout on the frontend (e.g., reset state)
  } catch (error) {
    console.error("Logout error:", error);
  }
});
