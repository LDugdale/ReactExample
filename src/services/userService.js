import { auth, db } from '../firebase';
 

export const createUser = (username, email, passwordOne) => {
    return new Promise((resolve, reject) => {
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            db.doCreateUser(authUser.user.uid, username, email)
            .then(() =>
                resolve()
            )
            .catch(error =>
                reject(error)
            );    
        })
        .catch(error =>
            reject(error)
        );
    });
}

export const signIn = (email, password) => {
    return auth.doSignInWithEmailAndPassword(email, password);
}

export const passwordReset = (email) => {
    return auth.doPasswordReset(email);
}