import axios from 'axios';
//const BLOG_API = `${API_BASE}/tuits`;
const BLOG_API = 'http://localhost:4000/api/locations';

export const findLocationbyPlaceID = async (id) => {
    const response = await axios.get(`${BLOG_API}/${id}`);
    //console.log(response)
    const location = response.data;
    return location;
}