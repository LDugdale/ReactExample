import  { API, graphqlOperation } from "./amplify";
import * as queries from '../graphql/queries';

const searchPlantNames = (searchText) => 
    API.graphql(graphqlOperation(queries.searchPlantNamess, searchText));

export {
    searchPlantNames
};