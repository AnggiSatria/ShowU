import { API } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dangerZone = createApi({
  reducerPath: "danger-zone",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => {},
});

export const {} = dangerZone;
