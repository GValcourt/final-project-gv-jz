import {createSlice}
  from "@reduxjs/toolkit";
import {findArticlesThunk}
  from "../../services/articles-thunks";

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
   }
 },
 reducers: { }
});
