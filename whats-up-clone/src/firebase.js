import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWrMKPUwl89v8QGSezde0O9lZhWKXIiio",
    authDomain: "whats-up-clone-876fe.firebaseapp.com",
    databaseURL: "https://whats-up-clone-876fe.firebaseio.com",
    projectId: "whats-up-clone-876fe",
    storageBucket: "whats-up-clone-876fe.appspot.com",
    messagingSenderId: "177238518582",
    appId: "1:177238518582:web:5688d591b06d5630af2197",
    measurementId: "G-9KZSN3J9X5"
  });

  const db = firebaseApp.firestore();

  export default db;