import axios from "axios";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {initializeApp} from 'firebase/app';

const BLOG_API = 'http://localhost:4000/api';
const firebaseConfig = {
    apiKey: "AIzaSyDxoLO3BhvoTLFBRixCD667w31Wy8qyI_4",
    authDomain: "web-dev-final-project-382218.firebaseapp.com",
    projectId: "web-dev-final-project-382218",
    storageBucket: "web-dev-final-project-382218.appspot.com",
    messagingSenderId: "656963336648",
    appId: "1:656963336648:web:56318122c2e0fb513f28fd",
    measurementId: "G-ZJYMQQW6WY"
}
const app = initializeApp(firebaseConfig);
// Create a reference with an initial file path and name
const storage = getStorage(app);



export const postImage = async (image) =>{
    console.log(image)
    //const response = await axios.post(`${BLOG_API}/images/post`, image)
    uploadBytes(ref(storage, `images/${image.name}`), image).then((snapshot)=>{
        console.log('uploaded a blob or file!')})
}

export const getImage = async (imageid) =>{
    //console.log(uid)
    //needs to be a post req in order to sent a body
    const response = await axios.get(`${BLOG_API}/images/get/${imageid}`)
    //console.log(response.data)
    return response.data;
}