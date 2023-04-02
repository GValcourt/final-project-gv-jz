import {createSlice}
  from "@reduxjs/toolkit";
import {findArticlesThunk, checkLocationThunk} from "../../services/article-thunks.js";

const initialState = {
   articles: [],
   loading: false
}

const articleSlice = createSlice({
 name: 'articles',
 initialState,
 extraReducers: {
   [findArticlesThunk.pending]:
      (state) => {
         state.loading = true
         state.articles = []
   },
   [findArticlesThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.articles = payload
   },
   [findArticlesThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
   [checkLocationThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         //console.log(payload)
         const addressValid = "formatted_address" in payload
         addressValid ? alert("This is a valid address"): alert("This was not a valid address")
   },
   [checkLocationThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   }
 },
 reducers: { }
});

export default articleSlice.reducer;