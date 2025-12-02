import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./features/library/librarySlice";
import booksSliceReducer from "./features/fetchBooks/fetchBooksSlice"


const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: booksSliceReducer
  }
})

export default store
