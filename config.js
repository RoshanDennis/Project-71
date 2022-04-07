import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA8Vy72uoVkVKbjuvniOSgAGB8SZlmGyiQ",
    authDomain: "e-ride-b1410.firebaseapp.com",
    projectId: "e-ride-b1410",
    storageBucket: "e-ride-b1410.appspot.com",
    messagingSenderId: "12698436115",
    appId: "1:12698436115:web:8dd2e4ca2ae7fba17c35e6"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


