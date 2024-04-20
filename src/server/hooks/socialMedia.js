import { API, JSONGET, JSONNOTGET } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const socialMedia = createApi({
  reducerPath: "social-media",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    fetchSocialMediaProfile: builder.query({
      query: () => ({
        url: `/social-media/profile`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    patchSocialMediaProfile: builder.mutation({
      query: (data) => ({
        url: `/social-media/profile`,
        method: `PATCH`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchProfileByUserName: builder.query({
      query: (username) => ({
        url: `/social-media/profile/u/${username}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    patchSocialMediaProfile: builder.mutation({
      query: (data) => ({
        url: `/social-media/profile/cover-image`,
        method: `PATCH`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchAllPost: builder.query({
      query: () => ({
        url: `/social-media/posts`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    postOnSocialMedia: builder.mutation({
      query: (data) => ({
        url: `/social-media/posts`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchPostOnSocialMediaById: builder.query({
      query: (postId) => ({
        url: `/social-media/posts/${postId}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    deletePostOnSocialMediaById: builder.mutation({
      query: (postId) => ({
        url: `/social-media/posts/${postId}`,
        method: `DELETE`,
        headers: JSONNOTGET,
      }),
    }),
    patchPostOnSocialMedia: builder.mutation({
      query: ({ data, postId }) => ({
        url: `/social-media/posts/${postId}`,
        method: `PATCH`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchPostOnSocialMediaByUser: builder.query({
      query: () => ({
        url: `/social-media/posts/get/my`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    fetchPostOnSocialMediaByUserName: builder.query({
      query: (username) => ({
        url: `/social-media/posts/get/u/${username}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    fetchPostOnSocialMediaByTag: builder.query({
      query: (tag) => ({
        url: `/social-media/posts/get/t/${tag}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    patchPostOnSocialMediaRemovePostImage: builder.mutation({
      query: ({ data, postId, imageId }) => ({
        url: `/social-media/posts/remove/image/${postId}/${imageId}`,
        method: `PATCH`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postLikeOrUnlikePostOnSocialMedia: builder.mutation({
      query: ({ data, postId }) => ({
        url: `/social-media/like/post/${postId}`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postLikeOrUnlikeCommentOnSocialMedia: builder.mutation({
      query: ({ data, commentId }) => ({
        url: `/social-media/like/comment/${commentId}`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchPostCommentsOnSocialMedia: builder.query({
      query: (postId) => ({
        url: `/social-media/comments/post/${postId}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    postPostCommentsOnSocialMedia: builder.mutation({
      query: ({ data, postId }) => ({
        url: `/social-media/comments/post/${postId}`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    deletePostCommentsOnSocialMedia: builder.mutation({
      query: (commentId) => ({
        url: `/social-media/comments/${commentId}`,
        method: `DELETE`,
        headers: JSONNOTGET,
      }),
    }),
    patchUpdatedCommentsOnSocialMedia: builder.mutation({
      query: ({ data, commentId }) => ({
        url: `/social-media/comments/${commentId}`,
        method: `PATCH`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchBookmarksPostOnSocialMedia: builder.query({
      query: () => ({
        url: `/social-media/bookmarks`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    postAddOrRemoveBookmarksOnSocialMedia: builder.mutation({
      query: ({ data, postId }) => ({
        url: `/social-media/bookmarks/${postId}`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchUserFollowerListByUserNameOnSocialMedia: builder.query({
      query: (username) => ({
        url: `/social-media/follow/list/followers/${username}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    fetchUserFollowingListByUserNameOnSocialMedia: builder.query({
      query: (username) => ({
        url: `/social-media/follow/list/following/${username}`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    postFollowOrUnfollowUserOnSocialMedia: builder.mutation({
      query: ({ data, toBeFollowedUserId }) => ({
        url: `/social-media/follow/${toBeFollowedUserId}`,
        method: `POST`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
  }),
});

export const {
  useDeletePostCommentsOnSocialMediaMutation,
  useDeletePostOnSocialMediaByIdMutation,
  useFetchAllPostQuery,
  useFetchBookmarksPostOnSocialMediaQuery,
  useFetchPostCommentsOnSocialMediaQuery,
  useFetchPostOnSocialMediaByIdQuery,
  useFetchPostOnSocialMediaByTagQuery,
  useFetchPostOnSocialMediaByUserNameQuery,
  useFetchPostOnSocialMediaByUserQuery,
  useFetchProfileByUserNameQuery,
  useFetchSocialMediaProfileQuery,
  useFetchUserFollowerListByUserNameOnSocialMediaQuery,
  useFetchUserFollowingListByUserNameOnSocialMediaQuery,
  useLazyFetchAllPostQuery,
  useLazyFetchBookmarksPostOnSocialMediaQuery,
  useLazyFetchPostCommentsOnSocialMediaQuery,
  useLazyFetchPostOnSocialMediaByIdQuery,
  useLazyFetchPostOnSocialMediaByTagQuery,
  useLazyFetchPostOnSocialMediaByUserNameQuery,
  useLazyFetchPostOnSocialMediaByUserQuery,
  useLazyFetchProfileByUserNameQuery,
  useLazyFetchSocialMediaProfileQuery,
  useLazyFetchUserFollowerListByUserNameOnSocialMediaQuery,
  useLazyFetchUserFollowingListByUserNameOnSocialMediaQuery,
  usePatchPostOnSocialMediaMutation,
  usePatchPostOnSocialMediaRemovePostImageMutation,
  usePatchSocialMediaProfileMutation,
  usePatchUpdatedCommentsOnSocialMediaMutation,
  usePostAddOrRemoveBookmarksOnSocialMediaMutation,
  usePostFollowOrUnfollowUserOnSocialMediaMutation,
  usePostLikeOrUnlikeCommentOnSocialMediaMutation,
  usePostLikeOrUnlikePostOnSocialMediaMutation,
  usePostOnSocialMediaMutation,
  usePostPostCommentsOnSocialMediaMutation,
  usePrefetch,
} = socialMedia;
