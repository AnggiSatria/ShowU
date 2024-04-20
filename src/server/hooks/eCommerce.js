import { API } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eCommerce = createApi({
  reducerPath: "e-commerce",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => {},
});

export const {} = eCommerce;
