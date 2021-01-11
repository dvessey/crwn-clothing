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

  export const createUserProfileDocumnet = async (userAuth, additionalData) => {
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        
        if(!snapShot.exists){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                displayName, email, createdAt, ...additionalData
              })
          } catch(error){
              console.log('error creating user', error.message);
          }
        }

        return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

