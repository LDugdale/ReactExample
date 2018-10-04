// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const OnCreateUser = gql`
  subscription OnCreateUser {
    onCreateUser {
      id
      username
    }
  }
`;
export const OnUpdateUser = gql`
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
    }
  }
`;
export const OnDeleteUser = gql`
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
    }
  }
`;
export const OnCreatePlant = gql`
  subscription OnCreatePlant {
    onCreatePlant {
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
export const OnUpdatePlant = gql`
  subscription OnUpdatePlant {
    onUpdatePlant {
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
export const OnDeletePlant = gql`
  subscription OnDeletePlant {
    onDeletePlant {
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
export const OnCreatePlantCommonNames = gql`
  subscription OnCreatePlantCommonNames {
    onCreatePlantCommonNames {
      id
      commonName
    }
  }
`;
export const OnUpdatePlantCommonNames = gql`
  subscription OnUpdatePlantCommonNames {
    onUpdatePlantCommonNames {
      id
      commonName
    }
  }
`;
export const OnDeletePlantCommonNames = gql`
  subscription OnDeletePlantCommonNames {
    onDeletePlantCommonNames {
      id
      commonName
    }
  }
`;
export const OnCreatePlantSynonyms = gql`
  subscription OnCreatePlantSynonyms {
    onCreatePlantSynonyms {
      id
      synonym
    }
  }
`;
export const OnUpdatePlantSynonyms = gql`
  subscription OnUpdatePlantSynonyms {
    onUpdatePlantSynonyms {
      id
      synonym
    }
  }
`;
export const OnDeletePlantSynonyms = gql`
  subscription OnDeletePlantSynonyms {
    onDeletePlantSynonyms {
      id
      synonym
    }
  }
`;
export const OnCreatePlantExtraInformation = gql`
  subscription OnCreatePlantExtraInformation {
    onCreatePlantExtraInformation {
      id
      information
    }
  }
`;
export const OnUpdatePlantExtraInformation = gql`
  subscription OnUpdatePlantExtraInformation {
    onUpdatePlantExtraInformation {
      id
      information
    }
  }
`;
export const OnDeletePlantExtraInformation = gql`
  subscription OnDeletePlantExtraInformation {
    onDeletePlantExtraInformation {
      id
      information
    }
  }
`;
