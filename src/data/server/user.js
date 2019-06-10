import { postData } from './helpers';

export const createUser = (credentials) => {
    let path = 'user';
    return postData(path, credentials); 
}

export const signInUser = (credentials) => {
    let path = 'user/login';
    return postData(path, credentials); 
}
