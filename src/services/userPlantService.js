import { userPlant } from '../data/server';
import * as storage from '../constants/storage';

export const addUserPlant = async (plant, nickname) => {

    let data = {
        plantId: plant.plantId,
        nickname: nickname
    };

    const userPlantData = await userPlant.addUserPlant(data);
    return userPlantData.userPlantId
}

export const getUserPlants = async () => {    

    let userPlants = undefined// JSON.parse(localStorage.getItem(storage.USER_PLANT_STORAGE));
    
    if(!userPlants) {
        const response = await userPlant.getUserPlants();
        userPlants = response.userPlants
        localStorage.setItem(storage.USER_PLANT_STORAGE, JSON.stringify(userPlants));
    }
    
    return userPlants;
}

export const getUserPlant = async (userPlantId) => {   
     
    const response = await userPlant.getUserPlant(userPlantId);
    return response.userPlants;
}

export const addUserPlantActivity = async (activity) => {

    const response = await userPlant.addUserPlantActivity(activity);
    return response;
}
