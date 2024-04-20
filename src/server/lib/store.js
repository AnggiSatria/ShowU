import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { publics } from "../hooks/public";
import { auth } from "../hooks/auth";

const rootReducer = combineReducers({
  [publics.reducerPath]: publics.reducer,
  [auth.reducerPath]: auth.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(publics.middleware, auth.middleware),
});

setupListeners(store.dispatch);
