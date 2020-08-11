import axios from 'axios';

const jsonPlaceholderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
});

export default jsonPlaceholderApi;
