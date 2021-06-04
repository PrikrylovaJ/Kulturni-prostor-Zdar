import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzgP7fRp9U9Z7TP4deLNCAnLTYxT-MGP0",
  authDomain: "vystavy-f924e.firebaseapp.com",
  projectId: "vystavy-f924e",
  storageBucket: "vystavy-f924e.appspot.com",
  messagingSenderId: "801931017330",
  appId: "1:801931017330:web:92283e906609dd988016eb"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();