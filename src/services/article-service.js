import axios from 'axios';
//const BLOG_API = `${API_BASE}/tuits`;
const BLOG_API = 'http://localhost:4000/api/articles';

export const createArticle = async (article) => {
    const response = await axios.post(BLOG_API, article)
    //console.log(response.data)
    return response.data;
}

export const getArticles = async () => {
    const response = await axios.get(BLOG_API);
    //console.log(response)
    const articles = response.data;
    return articles;
}

export const findArticlebyAID = async (aid) => {
    const response = await axios.get(`${BLOG_API}/${aid}`);
    //console.log(response)
    const article = response.data;
    return article;
}

export const findArticlebyPred = async (pred, value) => {
    const response = await axios.get(`${BLOG_API}/pred/${pred}/${value}`);
    const articles = response.data
    //console.log(articles)
    return articles;
}

export const findArticlebyLocation = async (place_id) => {
    const response = await axios.get(`${BLOG_API}/byplace/${place_id}`);
    //console.log(place_id)
    const articles = response.data
    //console.log(articles)
    return articles;
}

export const deleteArticle = async (aid) => {
    const response = await axios
      .delete(`${BLOG_API}/${aid}`)
    return response.data
}

export const updateArticle = async (article) => {
    const response = await axios.put(`${BLOG_API}/${article._id}`, article);
    //console.log(response === 200)
    return article;
}
