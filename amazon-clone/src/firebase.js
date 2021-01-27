import firebase from "firebase";

const firebaseConfig = {
    apiKey: "apikey",
    authDomain: "clone-cd8ea.firebaseapp.com",
    projectId: "clone-cd8ea",
    storageBucket: "clone-cd8ea.appspot.com",
    messagingSenderId: "571158926714",
    appId: "1:571158926714:web:990b0123377efcf910b2c3",
    measurementId: "G-NTBS659PV3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
