import { API } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kitchenSink = createApi({
  reducerPath: "kitchen-sink",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => {},
});

export const {} = kitchenSink;
