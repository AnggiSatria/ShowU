import { API, JSONGET, JSONNOTGET } from "@/config/config";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  auth: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    REFETCH_GOOGLE: (state, action) => {
      return {
        ...state,
        user_google: action.payload,
      };
    },
  },
});

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    fetchGoogleLogin: builder.query({
      query: () => ({
        url: `/users/google`,
        method: "GET",
        headers: JSONGET,
      }),
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
    postRegisterUsers: builder.mutation({
      query: (data) => ({
        url: `/users/register`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postLoginUsers: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postLogoutUsers: builder.mutation({
      query: (data) => ({
        url: `/users/logout`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postRefreshTokenUsers: builder.mutation({
      query: (data) => ({
        url: `/users/refresh-token`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postAssignRoleUsers: builder.mutation({
      query: (data) => ({
        url: `/users/assign-role/{userId}`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postResendEmailVerification: builder.mutation({
      query: (data) => ({
        url: `/users/resend-email-verification`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postChangeCurrentPassword: builder.mutation({
      query: (data) => ({
        url: `/users/change-password`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postForgotPasswordRequest: builder.mutation({
      query: (data) => ({
        url: `/users/forgot-password`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postResetForgottenPassword: builder.mutation({
      query: ({ data, resetToken }) => ({
        url: `/users/reset-password/${resetToken}`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postUpdatedAvatar: builder.mutation({
      query: (data) => ({
        url: `/users/updated-avatar`,
        method: "PATCH",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
  }),
});

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;

export const {
  useFetchGoogleLoginQuery,
  useFetchGoogleLoginCallbackQuery,
  useFetchGithubLoginQuery,
  useFetchGithubLoginCallbackQuery,
  useFetchLoggedUserQuery,
  useFetchVerifyUserEmailQuery,
  usePostRegisterUsersMutation,
  usePostLoginUsersMutation,
  usePostLogoutUsersMutation,
  usePostRefreshTokenUsersMutation,
  usePostAssignRoleUsersMutation,
  usePostResendEmailVerificationMutation,
  usePostChangeCurrentPasswordMutation,
  usePostForgotPasswordRequestMutation,
  usePostResetForgottenPasswordMutation,
  usePostUpdatedAvatarMutation,
} = auth;
