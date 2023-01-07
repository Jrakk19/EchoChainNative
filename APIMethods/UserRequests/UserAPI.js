import axios from 'axios';

const userAPI = axios.create({
    baseURL: 'http://localhost:3000/users',
});

export const registerUser = (email, password, displayName) => {
    return userAPI.post('/register', {
        email,
        password,
        displayName,
    });
}

export const loginUser = (email, password) => {
    return userAPI.post('/login', {
        email,
        password,
    });
}

export const getUserById = (id) => {
    return userAPI.get(`/${id}`);
}
