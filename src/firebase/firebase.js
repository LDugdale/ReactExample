import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDvNhZY2EKd_3-PK6ten08Uu7sqEErtP3k",
    authDomain: "planted-d83a7.firebaseapp.com",
    databaseURL: "https://planted-d83a7.firebaseio.com",
    projectId: "planted-d83a7",
    storageBucket: "planted-d83a7.appspot.com",
    messagingSenderId: "864846443928"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};