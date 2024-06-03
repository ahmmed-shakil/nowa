import { base_url_cashier } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const expenseURL = `${base_url_cashier}/expense`;

export const getExpenses = createAsyncThunk("expense/get", async () => {
  try {
    const response = await axios.get(expenseURL);
    console.log("Get expense data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to get expense data");
  }
});

export const createExpense = createAsyncThunk(
  "expense/create",
  async ({ body }) => {
    try {
      const response = await axios.post(expenseURL, body);
      console.log("Create expense data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create expense");
    }
  }
);

export const updateExpense = createAsyncThunk(
  "expense/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${expenseURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update expense data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update expense");
    }
  }
);

export const deleteExpense = createAsyncThunk("expense/delete", async (id) => {
  try {
    const updateURL = `${expenseURL}/${id}`;
    const response = await axios.delete(updateURL);
    console.log("Delete expense data: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to delete expense");
  }
});
