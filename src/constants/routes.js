export const LANDING = '/';

export const AUTHENTICATION = '/authentication';
export const SIGN_UP = AUTHENTICATION + '/signup';
export const SIGN_IN = AUTHENTICATION + '/signin';
export const PASSWORD_FORGET = AUTHENTICATION + '/pw-forget';

export const HOME = '/home';
export const PLANTS = HOME + '/plants';
export const LIBRARY = HOME + '/library';
export const SOCIAL = HOME + '/social';

export const ACCOUNT = '/account';

export const SINGLE = '/single';
export const ADD_PLANT = SINGLE + '/addplant';
export const USER_PLANT = (userPlantId) => SINGLE + '/user-plant/' + userPlantId
