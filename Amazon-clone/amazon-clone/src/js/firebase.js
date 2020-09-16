import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpcSwx0viYTosXrMQF_1nup4sNg7yAf28",
    authDomain: "clone-796d8.firebaseapp.com",
    databaseURL: "https://clone-796d8.firebaseio.com",
    projectId: "clone-796d8",
    storageBucket: "clone-796d8.appspot.com",
    messagingSenderId: "198928245414",
    appId: "1:198928245414:web:8927ba5a5318616c2d4a67",
    measurementId: "G-3K23BQPBX9"
  };
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
