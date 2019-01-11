import { postData } from './helpers';

export const searchPlants = (searchText) => {
    let path = 'plants/search';
     
    return new Promise((resolve, reject) => {
        postData(path, searchText)
        .then((data) => 
            resolve(data.plants)
        )
        .catch((error) => 
            reject(error)
        );
    });
}
