import { checkStatus, parseJSON} from '../../services/responseService';
import { getToken } from '../../services/tokenService';
import { isSignedIn } from '../../services/userService';

const DOMAIN = 'http://localhost:4000/';

export const postData = (path, body) => {  
    return fetchData("POST", path, body);    
}

export const getData = (path) => {
    return fetchData("GET", path);
}

const fetchData = async (method, path, body) => {

    const headers = getHeaders();

    return await new Promise( async (resolve, reject) =>{
        fetch(DOMAIN + path, {
            method: method,
            headers,
            body: JSON.stringify(body),
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
            resolve(data);
        }).catch((error) => {
            parseJSON(error.response)
                .then((error)=> {      
                    debugger;              
                    reject(error);
                });
        }) 
    });
}

const getHeaders = () => {
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (isSignedIn()) {
        headers['Authorization'] = getToken()
    }

    return headers;
}
