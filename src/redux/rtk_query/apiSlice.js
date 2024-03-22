import {Environment} from "../../config/Environment";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: Environment.baseUrl,
    prepareHeaders: headers => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    timeout: 30000,
  }),
  endpoints: builder => ({
    fetchImagesListData: builder.query({
      query: url => {
        return url;
      },
    }),
    /* postData: builder.mutation({
      query: ({url, data}) => ({
        url: url,
        method: "POST",
        body: data,
      }),
    }), */
  }),
});

export const {useFetchImagesListDataQuery, useFetchImagesSearchDataQuery} =
  apiSlice;
