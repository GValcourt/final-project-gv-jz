import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./article-service"

export const findArticlesThunk = createAsyncThunk(
  'articles/getArticles', async () =>
    await service.getArticles()
)

export const findArticleByAidThunk = createAsyncThunk(
    'articles/findArticles', async (articleId) =>{
        await service.findArticlebyAID(articleId)
    }
)

export const deleteArticleThunk = createAsyncThunk(
  'articles/deleteArticle',
  async (articleId) => {
    await service.deleteArticle(articleId)
    return articleId
})

export const createArticleThunk = createAsyncThunk(
  'articles/createArticle',
  async (article) => {
    const newArticle = await service.createArticle(article)
    //console.log(newArticle)
    return newArticle;
    //await service.findArticles()
    //console.log(article)
})

export const updateArticleThunk =
  createAsyncThunk(
    'articles/updateArticle',
    async (article) =>
      await service.updateArticle(article)
)
