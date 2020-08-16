import axios from 'axios';

export const awsApi = axios.create({
    baseURL: 'http://ec2-13-57-28-144.us-west-1.compute.amazonaws.com:2025/',
    timeout: 1000,
});


// Post Request
export const performLogin = (mailId: string, password: string) => {

    return awsApi.post('/user/login', { mailId, password })
};

// Get Request

