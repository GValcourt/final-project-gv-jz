import axios from 'axios';
const BLOG_API = 'http://localhost:4000/api/profile';

export const createProfile = async (profile) => {
    const response = await axios.post(BLOG_API, profile)
    return response.data;
}

export const getProfile = async () => {
    const response = await axios.get(BLOG_API);
    const profile = response.data;
    return profile;
}

export const updateProfile = async (profile) => {
    const response = await axios.put(BLOG_API, profile);
    return profile;
}