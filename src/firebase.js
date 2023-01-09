import firebase from 'firebase'

 firebase.initializeApp({
  apiKey: "AIzaSyAotf0hMy18RAou6WSlU_eUwPRcY3MCYDk",
  authDomain: "disney-plus-clone-eae3c.firebaseapp.com",
  projectId: "disney-plus-clone-eae3c",
  storageBucket: "disney-plus-clone-eae3c.appspot.com",
  messagingSenderId: "53704354583",
  appId: "1:53704354583:web:b3ba1ccea1a2dc948ba552",
  measurementId: "G-9054S27MKM"
});
  
const db = firebase.firestore();
//  sign in with google using firebase
const auth = firebase.auth()
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider()
export { db, auth, provider, storage}
