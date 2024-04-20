import { API } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const auth = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    fetchGoogleLogin: builder.query({
      query: () => `/users/google`,
    }),
    fetchGoogleLoginCallback: builder.query({
      query: () => `/users/google/callback`,
    }),
    fetchGithubLogin: builder.query({
      query: () => `/users/github`,
    }),
    fetchGithubLoginCallback: builder.query({
      query: () => `/users/github/callback`,
    }),
    fetchLoggedUser: builder.query({
      query: () => `/users/current-user`,
    }),
    fetchVerifyUserEmail: builder.query({
      query: (verificationToken) => `/users/verify-email/${verificationToken}`,
    }),
    registerUsers: builder.mutation({
      query: (data) => ({
        url: `/users/register`,
        method: "POST",
        body: data,
      }),
      loginUsers: builder.mutation({
        query: (data) => ({
          url: `/users/login`,
          method: "POST",
          body: data,
        }),
      }),
      logoutUsers: builder.mutation({
        query: (data) => ({
          url: `/users/logout`,
          method: "POST",
          body: data,
        }),
      }),
      refreshTokenUsers: builder.mutation({
        query: (data) => ({
          url: `/users/refresh-token`,
          method: "POST",
          body: data,
        }),
      }),
      assignRoleUsers: builder.mutation({
        query: (data) => ({
          url: `/users/assign-role/{userId}`,
          method: "POST",
          body: data,
        }),
      }),
      resendEmailVerification: builder.mutation({
        query: (data) => ({
          url: `/users/resend-email-verification`,
          method: "POST",
          body: data,
        }),
      }),
      changeCurrentPassword: builder.mutation({
        query: (data) => ({
          url: `/users/change-password`,
          method: "POST",
          body: data,
        }),
      }),
      forgotPasswordRequest: builder.mutation({
        query: (data) => ({
          url: `/users/forgot-password`,
          method: "POST",
          body: data,
        }),
      }),
      resetForgottenPassword: builder.mutation({
        query: ({ data, resetToken }) => ({
          url: `/users/reset-password/${resetToken}`,
          method: `POST`,
          body: data,
        }),
      }),
      updatedAvatar: builder.mutation({
        query: (data) => ({
          url: `/users/updated-avatar`,
          method: "PATCH",
          body: data,
        }),
      }),
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useFetchUsersQuery,
  useCreatePostMutation,
  useFetchPostByIdQuery,
} = auth;
