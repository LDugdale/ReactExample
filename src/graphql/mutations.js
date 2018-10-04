// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateUser = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;
export const UpdateUser = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      username
    }
  }
`;
export const DeleteUser = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      username
    }
  }
`;
export const CreatePlant = gql`
  mutation CreatePlant($input: CreatePlantInput!) {
    createPlant(input: $input) {
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
export const UpdatePlant = gql`
  mutation UpdatePlant($input: UpdatePlantInput!) {
    updatePlant(input: $input) {
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
export const DeletePlant = gql`
  mutation DeletePlant($input: DeletePlantInput!) {
    deletePlant(input: $input) {
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
export const CreatePlantCommonNames = gql`
  mutation CreatePlantCommonNames($input: CreatePlantCommonNamesInput!) {
    createPlantCommonNames(input: $input) {
      id
      commonName
    }
  }
`;
export const UpdatePlantCommonNames = gql`
  mutation UpdatePlantCommonNames($input: UpdatePlantCommonNamesInput!) {
    updatePlantCommonNames(input: $input) {
      id
      commonName
    }
  }
`;
export const DeletePlantCommonNames = gql`
  mutation DeletePlantCommonNames($input: DeletePlantCommonNamesInput!) {
    deletePlantCommonNames(input: $input) {
      id
      commonName
    }
  }
`;
export const CreatePlantSynonyms = gql`
  mutation CreatePlantSynonyms($input: CreatePlantSynonymsInput!) {
    createPlantSynonyms(input: $input) {
      id
      synonym
    }
  }
`;
export const UpdatePlantSynonyms = gql`
  mutation UpdatePlantSynonyms($input: UpdatePlantSynonymsInput!) {
    updatePlantSynonyms(input: $input) {
      id
      synonym
    }
  }
`;
export const DeletePlantSynonyms = gql`
  mutation DeletePlantSynonyms($input: DeletePlantSynonymsInput!) {
    deletePlantSynonyms(input: $input) {
      id
      synonym
    }
  }
`;
export const CreatePlantExtraInformation = gql`
  mutation CreatePlantExtraInformation(
    $input: CreatePlantExtraInformationInput!
  ) {
    createPlantExtraInformation(input: $input) {
      id
      information
    }
  }
`;
export const UpdatePlantExtraInformation = gql`
  mutation UpdatePlantExtraInformation(
    $input: UpdatePlantExtraInformationInput!
  ) {
    updatePlantExtraInformation(input: $input) {
      id
      information
    }
  }
`;
export const DeletePlantExtraInformation = gql`
  mutation DeletePlantExtraInformation(
    $input: DeletePlantExtraInformationInput!
  ) {
    deletePlantExtraInformation(input: $input) {
      id
      information
    }
  }
`;
