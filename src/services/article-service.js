import axios from 'axios';
//const BLOG_API = `${API_BASE}/tuits`;
const BLOG_API = 'http://localhost:4000/api/articles';

export const checkLocation = async (location) =>{
    //console.log(location)
    //needs to be a post req in order to sent a body
    const response = await axios.post(`${BLOG_API}/google/check`, location)
    //console.log(response.data)
    return response.data;
}

export const createArticle = async (article) => {
    const response = await axios.post(BLOG_API, article)
    //console.log(response.data)
    return response.data;
}

export const findArticles = async () => {
    const response = await axios.get(BLOG_API);
    //console.log(response)
    const articles = response.data;
    return articles;
}

export const findArticle = async (aid) => {
    const response = await axios.get(`${BLOG_API}/${aid}`);
    //console.log(response)
    const article = response.data;
    return article;
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
