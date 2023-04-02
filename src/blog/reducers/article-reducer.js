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
         alert(`Address saved as: ${payload.formatted_address}`)
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