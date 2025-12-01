import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./features/library/librarySlice"


const store = configureStore({
  reducer: {
    library: libraryReducer
  }
})

export default store
