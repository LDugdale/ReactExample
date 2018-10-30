import { auth, dbCreate } from '../data/amplify';
 

export const createUser = (username, email, passwordOne) => {
    return new Promise((resolve, reject) => {
        auth.doCreateUserWithEmailAndPassword(username, email, passwordOne)
        .then(authUser => {
            dbCreate.createUser({username: username})
            .then(() =>
                resolve()
            )
            .catch((error) =>
                reject(error)
            );               
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const signIn = (email, password) => {
    return auth.doSignInWithEmailAndPassword(email, password);
}

export const passwordReset = (email) => {
    return auth.doPasswordReset(email);
}