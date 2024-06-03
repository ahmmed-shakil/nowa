import { base_url_cashier } from "@/shared/lib/requestUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const expenseCategoryURL = `${base_url_cashier}/expense-category`;

export const getExpenseCategory = createAsyncThunk(
  "expenseCategory/get",
  async () => {
    try {
      const response = await axios.get(expenseCategoryURL);
      console.log("Get expense category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to get expense category");
    }
  }
);

export const createExpenseCategory = createAsyncThunk(
  "expenseCategory/create",
  async ({ body }) => {
    try {
      const response = await axios.post(expenseCategoryURL, body);
      console.log("Create expense category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to create expense category");
    }
  }
);

export const updateExpenseCategory = createAsyncThunk(
  "expenseCategory/update",
  async ({ body }, id) => {
    try {
      const updateURL = `${expenseCategoryURL}/${id}`;
      const response = await axios.patch(updateURL, body);
      console.log("Update expense category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to update expense category");
    }
  }
);

export const deleteExpenseCategory = createAsyncThunk(
  "expenseCategory/update",
  async (id) => {
    try {
      const deleteURL = `${expenseCategoryURL}/${id}`;
      const response = await axios.delete(deleteURL);
      console.log("Delete expense category data: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to Delete expense category");
    }
  }
);
