// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
  }
}
`;
export const createPlant = `mutation CreatePlant($input: CreatePlantInput!) {
  createPlant(input: $input) {
    id
    latinName
    genus
    commonNames {
      items {
        id
        name
      }
      nextToken
    }
    extraInformation {
      items {
        id
        key
        value
      }
      nextToken
    }
  }
}
`;
export const updatePlant = `mutation UpdatePlant($input: UpdatePlantInput!) {
  updatePlant(input: $input) {
    id
    latinName
    genus
    commonNames {
      items {
        id
        name
      }
      nextToken
    }
    extraInformation {
      items {
        id
        key
        value
      }
      nextToken
    }
  }
}
`;
export const deletePlant = `mutation DeletePlant($input: DeletePlantInput!) {
  deletePlant(input: $input) {
    id
    latinName
    genus
    commonNames {
      items {
        id
        name
      }
      nextToken
    }
    extraInformation {
      items {
        id
        key
        value
      }
      nextToken
    }
  }
}
`;
export const createPlantNames = `mutation CreatePlantNames($input: CreatePlantNamesInput!) {
  createPlantNames(input: $input) {
    id
    name
    nameType
    plant {
      id
      latinName
      genus
    }
  }
}
`;
export const updatePlantNames = `mutation UpdatePlantNames($input: UpdatePlantNamesInput!) {
  updatePlantNames(input: $input) {
    id
    name
    nameType
    plant {
      id
      latinName
      genus
    }
  }
}
`;
export const deletePlantNames = `mutation DeletePlantNames($input: DeletePlantNamesInput!) {
  deletePlantNames(input: $input) {
    id
    name
    nameType
    plant {
      id
      latinName
      genus
    }
  }
}
`;
export const createPlantExtraInformation = `mutation CreatePlantExtraInformation(
  $input: CreatePlantExtraInformationInput!
) {
  createPlantExtraInformation(input: $input) {
    id
    key
    value
    plant {
      id
      latinName
      genus
    }
  }
}
`;
export const updatePlantExtraInformation = `mutation UpdatePlantExtraInformation(
  $input: UpdatePlantExtraInformationInput!
) {
  updatePlantExtraInformation(input: $input) {
    id
    key
    value
    plant {
      id
      latinName
      genus
    }
  }
}
`;
export const deletePlantExtraInformation = `mutation DeletePlantExtraInformation(
  $input: DeletePlantExtraInformationInput!
) {
  deletePlantExtraInformation(input: $input) {
    id
    key
    value
    plant {
      id
      latinName
      genus
    }
  }
}
`;
