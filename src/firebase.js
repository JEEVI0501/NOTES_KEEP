// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB59ai0y7ucmqM57lLw4c2_L7xfhBrStUg",
  authDomain: "note-keep-aff67.firebaseapp.com",
  projectId: "note-keep-aff67",
  storageBucket: "note-keep-aff67.appspot.com",
  messagingSenderId: "654569835741",
  appId: "1:654569835741:web:e694daa4b242940351df34",
  measurementId: "G-GHECGS4PHP"
};

// Initialize Firebase
//const db = firebaseConfig.database(); 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
//const analytics = getAnalytics(app);

