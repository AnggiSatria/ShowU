import { API } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoList = createApi({
  reducerPath: "todo-list",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => {},
});

export const {} = socialMedia;
