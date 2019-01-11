import { userPlant } from '../data/server';

export const addUserPlant = async (plant, nickname) => {

    let data = {
        plantId: plant.plantId,
        nickname: nickname
    };

    const userPlantData = await userPlant.addUserPlant(data);
    return userPlantData.userPlantId
}

export const getUserPlants = async (userPlantId) => {    
    const response = await userPlant.getUserPlants(userPlantId);
    return response.userPlants;
}

export const getUserPlant = async (userPlantId) => {    
    const response = await userPlant.getUserPlant(userPlantId);
    return response.userPlants;
}
