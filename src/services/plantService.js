import { dbRead } from '../data/amplify';

const searchPlantNames = (inputText) => {
    const filter = {
        filter: {
            name: { 
                matchPhrasePrefix: inputText
            }
        }
    }
    return dbRead.searchPlantNames(filter);
}

export {
    searchPlantNames,
};