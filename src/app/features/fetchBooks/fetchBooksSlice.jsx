
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;


const initialState = {
  isLoading: false,
  fetchedBooks: [],
  error: ""
}


export const fetchBooks =  createAsyncThunk(
  "books/fetchBooks",
    async (arg) => {
      try {
        const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&key=${GOOGLE_API_KEY}&maxResults=20`)
        console.log(data)
        return data.items
      } catch (error) {
        console.log(error)
      }
    }
)

/*

PENDING

{
  type: "books/fetchBooks/pending",
  meta : {
      arg: "php",
      requestId: "ghvghvgvg",
      requestStatus: "pending"

  }
}




FULFILLED

{
  type: "books/fetchBooks/fulfilled",
  meta : {
      arg: "php",
      requestId: "ghvghvgvg",
      requestStatus: "fulfilled"

  }
}

REJECTED

{
  type: "books/fetchBooks/rejected",
  meta : {
      arg: "php",
      requestId: "ghvghvgvg",
      requestStatus: "rejected"

  },
  error: {
    name: "",
    message: "ppppppp",
    code:
  }
}

*/

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fetchedBooks = action.payload;
        state.error = "";
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.fetchedBooks = [];
        state.error = action.error.message;
      })
  }
})

export default booksSlice.reducer;
