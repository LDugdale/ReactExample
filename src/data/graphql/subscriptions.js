// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    username
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    username
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    username
  }
}
`;
export const onCreatePlant = `subscription OnCreatePlant {
  onCreatePlant {
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
export const onUpdatePlant = `subscription OnUpdatePlant {
  onUpdatePlant {
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
export const onDeletePlant = `subscription OnDeletePlant {
  onDeletePlant {
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
export const onCreatePlantNames = `subscription OnCreatePlantNames {
  onCreatePlantNames {
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
export const onUpdatePlantNames = `subscription OnUpdatePlantNames {
  onUpdatePlantNames {
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
export const onDeletePlantNames = `subscription OnDeletePlantNames {
  onDeletePlantNames {
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
export const onCreatePlantExtraInformation = `subscription OnCreatePlantExtraInformation {
  onCreatePlantExtraInformation {
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
export const onUpdatePlantExtraInformation = `subscription OnUpdatePlantExtraInformation {
  onUpdatePlantExtraInformation {
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
export const onDeletePlantExtraInformation = `subscription OnDeletePlantExtraInformation {
  onDeletePlantExtraInformation {
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
