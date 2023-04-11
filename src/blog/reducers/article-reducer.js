import {createSlice}
  from "@reduxjs/toolkit";
import {findArticlesThunk, findArticlebyLocationThunk, findArticleByAidThunk} from "../../services/article-thunks.js";

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
   [findArticlebyLocationThunk.fulfilled]:
      (state) => {
         state.loading = false
   },
   [findArticlebyLocationThunk.pending]:
      (state) => {
         state.loading = true
   },
   [findArticlebyLocationThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
   [findArticleByAidThunk.fulfilled]:
      (state) => {
         state.loading = false
   },
   [findArticleByAidThunk.pending]:
      (state) => {
         state.loading = true
   },
   [findArticleByAidThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
 },
 reducers: { }
});

export default articleSlice.reducer;