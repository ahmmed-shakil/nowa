import { createSlice } from "@reduxjs/toolkit";
import {
  createIssue,
  deleteIssue,
  getIssue,
  updateIssue,
} from "@/shared/redux/actions/store/issue/issueAction";

export const initialState = {
  issue: null,
  loading: null,
  error: null,
};

const issueSlice = createSlice({
  name: "issue",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getIssue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIssue.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(getIssue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createIssue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createIssue.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(createIssue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateIssue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateIssue.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(updateIssue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteIssue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteIssue.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(deleteIssue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default issueSlice.reducer;
