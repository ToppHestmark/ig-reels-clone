import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyComwoRLW7JM_GwgGt9WW-m36x0RqHmgg8",
  authDomain: "ig-reels-5444d.firebaseapp.com",
  databaseURL: "https://ig-reels-5444d.firebaseio.com",
  projectId: "ig-reels-5444d",
  storageBucket: "ig-reels-5444d.appspot.com",
  messagingSenderId: "140238163665",
  appId: "1:140238163665:web:63d9a558e466062d40bff0",
  measurementId: "G-3G8LFB2ZZ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;