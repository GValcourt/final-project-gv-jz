import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    console.log("Auth service login:", user);
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};


export const profile = async () => {
    console.log("Auth-service profile running");
    const response = await api.post(`${USERS_URL}/profile`);
    if(response.status === 404){
        console.log("Error 404 recognised");
        return response.status}
    return response.data;
};


export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user.id}`, user);
    return response.data;
};


export const register = async ({ first, last, email, type, username, password }) => {
    const newUser = {
        'first_name': first,
        'last_name': last,
        'user_type': type,
        'username': username,
        'password': password,
        'email': email
    };
    console.log(newUser)
    const response = await api.post(`${USERS_URL}/register`, newUser);
    return response.data;
}

export const checkUsername = async (username) => {
    const response = await api.post(`${USERS_URL}/find`, username);
    return response.data;
}

export const deleteUser = async (user) => {
    const response = await api.post(`${USERS_URL}/delete`, user.id);
    return response.data;
}