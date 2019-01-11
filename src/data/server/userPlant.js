import { postData, getData } from './helpers';

export const addUserPlant = (data) => {
    let path = 'userplant';
    return postData(path, data); 
}

export const getUserPlants = () => {
    let path = 'userplant';
    return getData(path); 
}

export const getUserPlant = (userPlantId) => {    
    const queryString = userPlantId ? '?userPlantId=' + userPlantId : '';
    let path = 'userplant/plant' + queryString;
    return getData(path); 
}