import { base_url_store } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const issueURL = `${base_url_store}/issue`;
export const getIssue = createAsyncThunk("issue/get", async () => {
  try {
    const response = await axios.get(issueURL);
    console.log("Get Issue data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to get issue data");
  }
});

export const createIssue = createAsyncThunk(
  "issue/create",
  async ({ issueData }) => {
    try {
      const response = await axios.post(issueURL, issueData);
      console.log("🚀 ~ createIssue ~ response:", response);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ createIssue ~ error:", error);
    }
  }
);

export const updateIssue = createAsyncThunk(
  "issue/update",
  async ({ issueData }, id) => {
    try {
      const updateURL = `${issueURL}/${id}`;
      const response = await axios.patch(updateURL, issueData);
      console.log("🚀 ~ createIssue ~ response:", response);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ createIssue ~ error:", error);
    }
  }
);

export const deleteIssue = createAsyncThunk("issue/delete", async (id) => {
  try {
    const deleteURL = `${issueURL}/${id}`;
    const response = await axios.delete(deleteURL);
    console.log("🚀 ~ createIssue ~ response:", response);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ createIssue ~ error:", error);
  }
});
