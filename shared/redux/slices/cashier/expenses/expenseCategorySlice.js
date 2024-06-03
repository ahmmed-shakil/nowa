import { createSlice } from "@reduxjs/toolkit";
import {
  createExpenseCategory,
  deleteExpenseCategory,
  getExpenseCategory,
  updateExpenseCategory,
} from "@/shared/redux/actions/cashier/expenses/expenseCategoryAction";

export const initialState = {
  category: null,
  loading: null,
  error: null,
};

const expenseCategorySlice = createSlice({
  name: "expenseCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getExpenseCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpenseCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getExpenseCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createExpenseCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createExpenseCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createExpenseCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateExpenseCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExpenseCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateExpenseCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteExpenseCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExpenseCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteExpenseCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default expenseCategorySlice.reducer;
