import { base_url } from "@/shared/lib/requestUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
