import axios from "axios";

const BLOG_API = 'http://localhost:4000/api';

export const postImage = async (image) =>{
    console.log(image)
    const response = await axios.post(`${BLOG_API}/images/post`, image)
    console.log(response.data)
    return response.data;
}

export const getImage = async (imageid) =>{
    //console.log(uid)
    //needs to be a post req in order to sent a body
    const response = await axios.get(`${BLOG_API}/images/get/${imageid}`)
    //console.log(response.data)
    return response.data;
}