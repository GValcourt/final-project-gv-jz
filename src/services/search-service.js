import axios from "axios";

const BLOG_API = 'http://localhost:4000/api';

export const checkLocation = async (location) =>{
    //console.log(location)
    //needs to be a post req in order to sent a body
    const response = await axios.post(`${BLOG_API}/google/check`, location)
    //console.log(response.data)
    return response.data;
}

export const getLocationCandidates = async (location) =>{
    //console.log(location)
    //needs to be a post req in order to sent a body
    const response = await axios.post(`${BLOG_API}/google/locations`, location)
    //console.log(response.data)
    return response.data;
}

export const getPlaceDetails = async (uid) =>{
    //console.log(uid)
    //needs to be a post req in order to sent a body
    const response = await axios.get(`${BLOG_API}/google/locations/${uid}`)
    //console.log(response.data)
    return response.data;
}