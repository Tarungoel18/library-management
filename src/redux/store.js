import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slice/bookSlice.js";
import authReducer from "./slice/authSlice.js";
const store = configureStore({
  reducer: {
    books: bookReducer,
    auth:authReducer
  },
});

export default store;
