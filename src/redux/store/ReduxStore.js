import {setupListeners} from "@reduxjs/toolkit/query";
import {configureStore} from "@reduxjs/toolkit";

// Slice reducers
import {apiSlice} from "../rtk_query/apiSlice";

export default ReduxStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(ReduxStore.dispatch);
