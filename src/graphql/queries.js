// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const GetUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
export const ListUsers = gql`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
      }
      nextToken
    }
  }
`;
export const GetPlant = gql`
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      latinName
      genus
      commonNames {
        nextToken
      }
      synonyms {
        nextToken
      }
      extraInformation {
        nextToken
      }
    }
  }
`;
export const ListPlants = gql`
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        latinName
        genus
      }
      nextToken
    }
  }
`;
export const GetPlantCommonNames = gql`
  query GetPlantCommonNames($id: ID!) {
    getPlantCommonNames(id: $id) {
      id
      commonName
    }
  }
`;
export const ListPlantCommonNamess = gql`
  query ListPlantCommonNamess(
    $filter: ModelPlantCommonNamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantCommonNamess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        commonName
      }
      nextToken
    }
  }
`;
export const GetPlantSynonyms = gql`
  query GetPlantSynonyms($id: ID!) {
    getPlantSynonyms(id: $id) {
      id
      synonym
    }
  }
`;
export const ListPlantSynonymss = gql`
  query ListPlantSynonymss(
    $filter: ModelPlantSynonymsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantSynonymss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        synonym
      }
      nextToken
    }
  }
`;
export const GetPlantExtraInformation = gql`
  query GetPlantExtraInformation($id: ID!) {
    getPlantExtraInformation(id: $id) {
      id
      information
    }
  }
`;
export const ListPlantExtraInformations = gql`
  query ListPlantExtraInformations(
    $filter: ModelPlantExtraInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantExtraInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        information
      }
      nextToken
    }
  }
`;
export const SearchPlants = gql`
  query SearchPlants(
    $filter: SearchablePlantFilterInput
    $sort: SearchablePlantSortInput
    $limit: Int
    $nextToken: Int
  ) {
    searchPlants(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        latinName
        genus
      }
      nextToken
    }
  }
`;
export const SearchPlantCommonNamess = gql`
  query SearchPlantCommonNamess(
    $filter: SearchablePlantCommonNamesFilterInput
    $sort: SearchablePlantCommonNamesSortInput
    $limit: Int
    $nextToken: Int
  ) {
    searchPlantCommonNamess(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        commonName
      }
      nextToken
    }
  }
`;
export const SearchPlantSynonymss = gql`
  query SearchPlantSynonymss(
    $filter: SearchablePlantSynonymsFilterInput
    $sort: SearchablePlantSynonymsSortInput
    $limit: Int
    $nextToken: Int
  ) {
    searchPlantSynonymss(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        synonym
      }
      nextToken
    }
  }
`;
