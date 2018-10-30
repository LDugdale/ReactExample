// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
  }
}
`;
export const listUsers = `query ListUsers(
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
export const getPlant = `query GetPlant($id: ID!) {
  getPlant(id: $id) {
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
export const listPlants = `query ListPlants(
  $filter: ModelPlantFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPlantNames = `query GetPlantNames($id: ID!) {
  getPlantNames(id: $id) {
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
export const listPlantNamess = `query ListPlantNamess(
  $filter: ModelPlantNamesFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlantNamess(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      nameType
      plant {
        id
        latinName
        genus
      }
    }
    nextToken
  }
}
`;
export const getPlantExtraInformation = `query GetPlantExtraInformation($id: ID!) {
  getPlantExtraInformation(id: $id) {
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
export const listPlantExtraInformations = `query ListPlantExtraInformations(
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
      key
      value
      plant {
        id
        latinName
        genus
      }
    }
    nextToken
  }
}
`;
export const searchPlants = `query SearchPlants(
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
    nextToken
  }
}
`;
export const searchPlantNamess = `query SearchPlantNamess(
  $filter: SearchablePlantNamesFilterInput
  $sort: SearchablePlantNamesSortInput
  $limit: Int
  $nextToken: Int
) {
  searchPlantNamess(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      nameType
      plant {
        id
        latinName
        genus
      }
    }
    nextToken
  }
}
`;
