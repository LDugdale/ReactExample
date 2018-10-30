import  { API, graphqlOperation } from "./amplify";
import * as mutations from '../graphql/mutations';

const wrapInput = (input) => {
    return {
        input: input
    };
}

const addItem = (mutation, item) => 
    API.graphql(graphqlOperation(mutation, wrapInput(item)));

export const createUser = async (username) =>
    await addItem(mutations.createUser, username);

export const createPlant = async (plant) => {
    const input = { 
        latinName: plant.LatinName,
        genus: plant.Genus,       
      };


    addItem(mutations.createPlant, input)
    .then((value) =>{

        if(plant.ExtraInformation){  
            Object.keys(plant.ExtraInformation).forEach(function (key){
              const extraInformation = {
                key: key,
                value: plant.ExtraInformation[key],
                plantExtraInformationPlantId: value.data.createPlant.id
              };
              CreatePlantExtraInformation(extraInformation);
            });
          }
          
          const plantLatinName = {
            name: value.data.createPlant.latinName,
            nameType: "LatinName",
            plantNamesPlantId: value.data.createPlant.id
          };
          CreatePlantNames(plantLatinName);
          

          for(var synonym of plant.Synonyms) {
            if(synonym && synonym !== ''){
              const plantSynonym = {
                name: synonym,
                nameType: "Synonym",
                plantNamesPlantId: value.data.createPlant.id
              };
              CreatePlantNames(plantSynonym);
            }
          }

          for(var name of plant.CommonNames) {
            if(name && name !== ''){
              const plantCommonName = {
                name: name,
                nameType: "CommonName",
                plantNamesPlantId: value.data.createPlant.id
              };
              CreatePlantNames(plantCommonName);
            }
          }
    });
}

export const CreatePlantExtraInformation = async (plantExtraInfo) =>
    await addItem(mutations.createPlantExtraInformation, plantExtraInfo)

export const CreatePlantNames = async (plantName) => 
    await addItem(mutations.createPlantNames, plantName)
