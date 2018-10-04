/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  username: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreatePlantInput = {
  latinName: string,
  genus: string,
};

export type UpdatePlantInput = {
  id: string,
  latinName?: string | null,
  genus?: string | null,
};

export type DeletePlantInput = {
  id?: string | null,
};

export type CreatePlantCommonNamesInput = {
  commonName: string,
  plantCommonNamesId?: string | null,
};

export type UpdatePlantCommonNamesInput = {
  id: string,
  commonName?: string | null,
  plantCommonNamesId?: string | null,
};

export type DeletePlantCommonNamesInput = {
  id?: string | null,
};

export type CreatePlantSynonymsInput = {
  synonym: string,
  plantSynonymsId?: string | null,
};

export type UpdatePlantSynonymsInput = {
  id: string,
  synonym?: string | null,
  plantSynonymsId?: string | null,
};

export type DeletePlantSynonymsInput = {
  id?: string | null,
};

export type CreatePlantExtraInformationInput = {
  information: string,
  plantExtraInformationId?: string | null,
};

export type UpdatePlantExtraInformationInput = {
  id: string,
  information?: string | null,
  plantExtraInformationId?: string | null,
};

export type DeletePlantExtraInformationInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  username?: ModelStringFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPlantFilterInput = {
  id?: ModelIDFilterInput | null,
  latinName?: ModelStringFilterInput | null,
  genus?: ModelStringFilterInput | null,
  and?: Array< ModelPlantFilterInput | null > | null,
  or?: Array< ModelPlantFilterInput | null > | null,
  not?: ModelPlantFilterInput | null,
};

export type ModelPlantCommonNamesFilterInput = {
  id?: ModelIDFilterInput | null,
  commonName?: ModelStringFilterInput | null,
  and?: Array< ModelPlantCommonNamesFilterInput | null > | null,
  or?: Array< ModelPlantCommonNamesFilterInput | null > | null,
  not?: ModelPlantCommonNamesFilterInput | null,
};

export type ModelPlantSynonymsFilterInput = {
  id?: ModelIDFilterInput | null,
  synonym?: ModelStringFilterInput | null,
  and?: Array< ModelPlantSynonymsFilterInput | null > | null,
  or?: Array< ModelPlantSynonymsFilterInput | null > | null,
  not?: ModelPlantSynonymsFilterInput | null,
};

export type ModelPlantExtraInformationFilterInput = {
  id?: ModelIDFilterInput | null,
  information?: ModelStringFilterInput | null,
  and?: Array< ModelPlantExtraInformationFilterInput | null > | null,
  or?: Array< ModelPlantExtraInformationFilterInput | null > | null,
  not?: ModelPlantExtraInformationFilterInput | null,
};

export type SearchablePlantFilterInput = {
  id?: SearchableIDFilterInput | null,
  latinName?: SearchableStringFilterInput | null,
  genus?: SearchableStringFilterInput | null,
  and?: Array< SearchablePlantFilterInput | null > | null,
  or?: Array< SearchablePlantFilterInput | null > | null,
  not?: SearchablePlantFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchablePlantSortInput = {
  field?: SearchablePlantSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlantSortableFields {
  id = "id",
  latinName = "latinName",
  genus = "genus",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePlantCommonNamesFilterInput = {
  id?: SearchableIDFilterInput | null,
  commonName?: SearchableStringFilterInput | null,
  and?: Array< SearchablePlantCommonNamesFilterInput | null > | null,
  or?: Array< SearchablePlantCommonNamesFilterInput | null > | null,
  not?: SearchablePlantCommonNamesFilterInput | null,
};

export type SearchablePlantCommonNamesSortInput = {
  field?: SearchablePlantCommonNamesSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlantCommonNamesSortableFields {
  id = "id",
  commonName = "commonName",
}


export type SearchablePlantSynonymsFilterInput = {
  id?: SearchableIDFilterInput | null,
  synonym?: SearchableStringFilterInput | null,
  and?: Array< SearchablePlantSynonymsFilterInput | null > | null,
  or?: Array< SearchablePlantSynonymsFilterInput | null > | null,
  not?: SearchablePlantSynonymsFilterInput | null,
};

export type SearchablePlantSynonymsSortInput = {
  field?: SearchablePlantSynonymsSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePlantSynonymsSortableFields {
  id = "id",
  synonym = "synonym",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type CreatePlantMutationVariables = {
  input: CreatePlantInput,
};

export type CreatePlantMutation = {
  createPlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePlantMutationVariables = {
  input: UpdatePlantInput,
};

export type UpdatePlantMutation = {
  updatePlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePlantMutationVariables = {
  input: DeletePlantInput,
};

export type DeletePlantMutation = {
  deletePlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePlantCommonNamesMutationVariables = {
  input: CreatePlantCommonNamesInput,
};

export type CreatePlantCommonNamesMutation = {
  createPlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type UpdatePlantCommonNamesMutationVariables = {
  input: UpdatePlantCommonNamesInput,
};

export type UpdatePlantCommonNamesMutation = {
  updatePlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type DeletePlantCommonNamesMutationVariables = {
  input: DeletePlantCommonNamesInput,
};

export type DeletePlantCommonNamesMutation = {
  deletePlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type CreatePlantSynonymsMutationVariables = {
  input: CreatePlantSynonymsInput,
};

export type CreatePlantSynonymsMutation = {
  createPlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type UpdatePlantSynonymsMutationVariables = {
  input: UpdatePlantSynonymsInput,
};

export type UpdatePlantSynonymsMutation = {
  updatePlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type DeletePlantSynonymsMutationVariables = {
  input: DeletePlantSynonymsInput,
};

export type DeletePlantSynonymsMutation = {
  deletePlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type CreatePlantExtraInformationMutationVariables = {
  input: CreatePlantExtraInformationInput,
};

export type CreatePlantExtraInformationMutation = {
  createPlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};

export type UpdatePlantExtraInformationMutationVariables = {
  input: UpdatePlantExtraInformationInput,
};

export type UpdatePlantExtraInformationMutation = {
  updatePlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};

export type DeletePlantExtraInformationMutationVariables = {
  input: DeletePlantExtraInformationInput,
};

export type DeletePlantExtraInformationMutation = {
  deletePlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlantQueryVariables = {
  id: string,
};

export type GetPlantQuery = {
  getPlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPlantsQueryVariables = {
  filter?: ModelPlantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantsQuery = {
  listPlants:  {
    __typename: "ModelPlantConnection",
    items:  Array< {
      __typename: "Plant",
      id: string,
      latinName: string,
      genus: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlantCommonNamesQueryVariables = {
  id: string,
};

export type GetPlantCommonNamesQuery = {
  getPlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type ListPlantCommonNamessQueryVariables = {
  filter?: ModelPlantCommonNamesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantCommonNamessQuery = {
  listPlantCommonNamess:  {
    __typename: "ModelPlantCommonNamesConnection",
    items:  Array< {
      __typename: "PlantCommonNames",
      id: string,
      commonName: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlantSynonymsQueryVariables = {
  id: string,
};

export type GetPlantSynonymsQuery = {
  getPlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type ListPlantSynonymssQueryVariables = {
  filter?: ModelPlantSynonymsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantSynonymssQuery = {
  listPlantSynonymss:  {
    __typename: "ModelPlantSynonymsConnection",
    items:  Array< {
      __typename: "PlantSynonyms",
      id: string,
      synonym: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlantExtraInformationQueryVariables = {
  id: string,
};

export type GetPlantExtraInformationQuery = {
  getPlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};

export type ListPlantExtraInformationsQueryVariables = {
  filter?: ModelPlantExtraInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantExtraInformationsQuery = {
  listPlantExtraInformations:  {
    __typename: "ModelPlantExtraInformationConnection",
    items:  Array< {
      __typename: "PlantExtraInformation",
      id: string,
      information: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchPlantsQueryVariables = {
  filter?: SearchablePlantFilterInput | null,
  sort?: SearchablePlantSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchPlantsQuery = {
  searchPlants:  {
    __typename: "SearchablePlantConnection",
    items:  Array< {
      __typename: "Plant",
      id: string,
      latinName: string,
      genus: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchPlantCommonNamessQueryVariables = {
  filter?: SearchablePlantCommonNamesFilterInput | null,
  sort?: SearchablePlantCommonNamesSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchPlantCommonNamessQuery = {
  searchPlantCommonNamess:  {
    __typename: "SearchablePlantCommonNamesConnection",
    items:  Array< {
      __typename: "PlantCommonNames",
      id: string,
      commonName: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchPlantSynonymssQueryVariables = {
  filter?: SearchablePlantSynonymsFilterInput | null,
  sort?: SearchablePlantSynonymsSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchPlantSynonymssQuery = {
  searchPlantSynonymss:  {
    __typename: "SearchablePlantSynonymsConnection",
    items:  Array< {
      __typename: "PlantSynonyms",
      id: string,
      synonym: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
  } | null,
};

export type OnCreatePlantSubscription = {
  onCreatePlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePlantSubscription = {
  onUpdatePlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePlantSubscription = {
  onDeletePlant:  {
    __typename: "Plant",
    id: string,
    latinName: string,
    genus: string,
    commonNames:  {
      __typename: "ModelPlantCommonNamesConnection",
      nextToken: string | null,
    } | null,
    synonyms:  {
      __typename: "ModelPlantSynonymsConnection",
      nextToken: string | null,
    } | null,
    extraInformation:  {
      __typename: "ModelPlantExtraInformationConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePlantCommonNamesSubscription = {
  onCreatePlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type OnUpdatePlantCommonNamesSubscription = {
  onUpdatePlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type OnDeletePlantCommonNamesSubscription = {
  onDeletePlantCommonNames:  {
    __typename: "PlantCommonNames",
    id: string,
    commonName: string,
  } | null,
};

export type OnCreatePlantSynonymsSubscription = {
  onCreatePlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type OnUpdatePlantSynonymsSubscription = {
  onUpdatePlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type OnDeletePlantSynonymsSubscription = {
  onDeletePlantSynonyms:  {
    __typename: "PlantSynonyms",
    id: string,
    synonym: string,
  } | null,
};

export type OnCreatePlantExtraInformationSubscription = {
  onCreatePlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};

export type OnUpdatePlantExtraInformationSubscription = {
  onUpdatePlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};

export type OnDeletePlantExtraInformationSubscription = {
  onDeletePlantExtraInformation:  {
    __typename: "PlantExtraInformation",
    id: string,
    information: string,
  } | null,
};
