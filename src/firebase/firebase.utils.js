import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyCO_YQmPSIyu8JwX8lA_vE8zAalWSkEtfA",
    authDomain: "crwn-db-17d40.firebaseapp.com",
    projectId: "crwn-db-17d40",
    storageBucket: "crwn-db-17d40.appspot.com",
    messagingSenderId: "555069745014",
    appId: "1:555069745014:web:07077102cac7d661217c57",
    measurementId: "G-8R4ST5F2T8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

