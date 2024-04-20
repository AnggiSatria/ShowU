import { API } from "@/config/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publics = createApi({
  reducerPath: "public",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => "/public/randomusers",
    }),
    fetchUsersById: builder.query({
      query: (userId) => `/public/randomusers/${userId}`,
    }),
    fetchRandomUsers: builder.query({
      query: () => `/public/randomusers/user/random`,
    }),
    fetchProducts: builder.query({
      query: (productId) => `/public/randomproducts/${productId}`,
    }),
    fetchRandomProducts: builder.query({
      query: () => `/public/randomproducts/product/random`,
    }),
    fetchJokes: builder.query({
      query: () => `/public/randomjokes`,
    }),
    fetchRandomJokesById: builder.query({
      query: (jokeId) => `/public/randomjokes/${jokeId}`,
    }),
    fetchRandomJokes: builder.query({
      query: () => `/public/randomjokes/joke/random`,
    }),
    fetchBooks: builder.query({
      query: () => `/public/books`,
    }),
    fetchBooksById: builder.query({
      query: (bookId) => `/public/books/${bookId}`,
    }),
    fetchRandomBooks: builder.query({
      query: `/public/books/book/random`,
    }),
    fetchStocks: builder.query({
      query: () => `/public/stocks`,
    }),
    fetchStocksBySymbolId: builder.query({
      query: (stockSymbol) => `/public/stocks/${stockSymbol}`,
    }),
    fetchRandomStocks: builder.query({
      query: () => `/public/stocks/stock/random`,
    }),
    fetchQuotes: builder.query({
      query: () => `/public/quotes`,
    }),
    fetchQuotesById: builder.query({
      query: (quoteId) => `/public/quotes/${quoteId}`,
    }),
    fetchRandomQuotes: builder.query({
      query: () => `/public/quotes/quote/random`,
    }),
    fetchMeals: builder.query({
      query: () => `/public/meals`,
    }),
    fetchMealsById: builder.query({
      query: (mealId) => `/public/meals/${mealId}`,
    }),
    fetchMealsRandom: builder.query({
      query: () => `/public/meals/meal/random`,
    }),
    fetchDogs: builder.query({
      query: () => `/public/dogs`,
    }),
    fetchDogsById: builder.query({
      query: (dogId) => `/public/dogs/${dogId}`,
    }),
    fetchDogsRandom: builder.query({
      query: () => `/public/dogs/dog/random`,
    }),
    fetchCats: builder.query({
      query: () => `/public/cats`,
    }),
    fetchCatsById: builder.query({
      query: (catId) => `/public/cats/${catId}`,
    }),
    fetchRandomCats: builder.query({
      query: () => `/public/cats/cat/random`,
    }),
    fetchChannelDetails: builder.query({
      query: () => `/public/youtube/channel`,
    }),
    fetchYoutubeVideo: builder.query({
      query: () => `/public/youtube/videos`,
    }),
    fetchYoutubeVideoById: builder.query({
      query: (videoId) => `/public/youtube/videos/${videoId}`,
    }),
    fetchYoutubeVideoComments: builder.query({
      query: (videoId) => `/public/youtube/comments/${videoId}`,
    }),
    fetchYoutubeVideoRelatedVideo: builder.query({
      query: (videoId) => `/public/youtube/related/${videoId}`,
    }),
    fetchYoutubeVideoPlaylist: builder.query({
      query: () => `/public/youtube/playlists`,
    }),
    fetchYoutubeVideoPlaylistDetailsAndItems: builder.query({
      query: (playlistId) => `/public/youtube/playlists/${playlistId}`,
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useFetchUsersByIdQuery,
  useFetchRandomUsersQuery,
  useFetchProductsQuery,
  useFetchRandomProductsQuery,
  useFetchJokesQuery,
  useFetchRandomJokesByIdQuery,
  useFetchRandomJokesQuery,
  useFetchBooksQuery,
  useFetchBooksByIdQuery,
  useFetchRandomBooksQuery,
  useFetchStocksQuery,
  useFetchStocksBySymbolIdQuery,
  useFetchRandomStocksQuery,
  useFetchQuotesQuery,
  useFetchQuotesByIdQuery,
  useFetchRandomQuotesQuery,
  useFetchMealsQuery,
  useFetchMealsByIdQuery,
  useFetchMealsRandomQuery,
  useFetchDogsQuery,
  useFetchDogsByIdQuery,
  useFetchDogsRandomQuery,
  useFetchCatsQuery,
  useFetchCatsByIdQuery,
  useFetchRandomCatsQuery,
  useFetchChannelDetailsQuery,
  useFetchYoutubeVideoQuery,
  useFetchYoutubeVideoByIdQuery,
  useFetchYoutubeVideoCommentsQuery,
  useFetchYoutubeVideoRelatedVideoQuery,
  useFetchYoutubeVideoPlaylistQuery,
  useXXXQuery,
  useFetchYoutubeVideoPlaylistDetailsAndItemsQuery,
} = publics;
