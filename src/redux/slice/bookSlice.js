import { createSlice } from "@reduxjs/toolkit";
import bookList from "../../data/bookslist.json";
const initialState = {
  bookList,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
