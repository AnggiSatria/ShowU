import { API, JSONGET, JSONNOTGET } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const getJobs = (activeFilter) => {
//   const queryString = QueryString.parse(removeEmptyAttributes(activeFilter));
//   return api.get(handlers, { params: { ...queryString } });
// };

export const chats = createApi({
  reducerPath: "chats",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    fetchUserChatsList: builder.query({
      query: () => ({
        url: `/chat-app/chats`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    fetchAvailableUsersChats: builder.query({
      query: () => ({
        url: `/chat-app/chats/users`,
        method: `GET`,
        headers: JSONGET,
      }),
    }),
    postOneToOneChat: builder.mutation({
      query: ({ data, receiverId }) => ({
        url: `/chat-app/chats/c/${receiverId}`,
        method: "POST",
        body: data,
        headers: JSONGET,
      }),
    }),
    deleteOneToOneChat: builder.mutation({
      query: (chatId) => ({
        url: `/chat-app/chats/remove/${chatId}`,
        method: `DELETE`,
        headers: JSONNOTGET,
      }),
    }),
    postCreateGroupChats: builder.mutation({
      query: (data) => ({
        url: `/chat-app/chats/group`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    fetchGroupChatsById: builder.query({
      query: (chatId) => ({
        url: `/chat-app/chats/group/${chatId}`,
        method: "GET",
        headers: JSONGET,
      }),
      headers: JSONNOTGET,
    }),
    deleteGroupChats: builder.mutation({
      query: (chatId) => ({
        url: `/chat-app/chats/group/${chatId}`,
        method: `DELETE`,
        headers: JSONNOTGET,
      }),
    }),
    updateGroupChatName: builder.mutation({
      query: ({ chatId, data }) => ({
        url: `/chat-app/chats/group/${chatId}`,
        method: `PATCH`,
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    postAddParticipantInGroupChat: builder.mutation({
      query: ({ participantId, data, chatId }) => ({
        url: `/chat-app/chats/group/${chatId}/${participantId}`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    deleteAddParticipantInGroupChat: builder.mutation({
      query: ({ participantId, chatId }) => ({
        url: `/chat-app/chats/group/${chatId}/${participantId}`,
        method: "DELETE",
        headers: JSONNOTGET,
      }),
    }),
    deleteLeaveGroupChat: builder.mutation({
      query: (chatId) => ({
        url: `/chat-app/chats/leave/group/${chatId}`,
        method: "DELETE",
        headers: JSONNOTGET,
      }),
    }),
    fetchAllMessage: builder.mutation({
      query: (chatId) => ({
        url: `/chat-app/messages/${chatId}`,
        method: "GET",
        headers: JSONNOTGET,
      }),
    }),
    postSendMessage: builder.mutation({
      query: ({ chatId, data }) => ({
        url: `/chat-app/messages/${chatId}`,
        method: "POST",
        body: data,
        headers: JSONNOTGET,
      }),
    }),
    deleteChatMessageByIdAndChatId: builder.mutation({
      query: ({ chatId, messageId }) => ({
        url: `/chat-app/messages/${chatId}/${messageId}`,
        method: "DELETE",
        headers: JSONNOTGET,
      }),
    }),
  }),
});

export const {
  useFetchUserChatsListQuery,
  useFetchAvailableUsersChatsQuery,
  usePostOneToOneChatMutation,
  useDeleteAddParticipantInGroupChatMutation,
  useDeleteChatMessageByIdAndChatIdMutation,
  useDeleteGroupChatsMutation,
  useDeleteLeaveGroupChatMutation,
  useDeleteOneToOneChatMutation,
  useFetchAllMessageMutation,
  usePostSendMessageMutation,
  usePostAddParticipantInGroupChatMutation,
  usePostCreateGroupChatsMutation,
  useUpdateGroupChatNameMutation,
  useFetchGroupChatsByIdQuery,
  useLazyFetchUserChatsListQuery,
  useLazyFetchAvailableUsersChatsQuery,
  useLazyFetchGroupChatsByIdQuery,
  usePrefetch,
} = chats;
