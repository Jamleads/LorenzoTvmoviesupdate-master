// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqv1TATRWylOPhh5qRX_Y71wGC-qMzNak",
  authDomain: "lorenzotvmoies.firebaseapp.com",
  projectId: "lorenzotvmoies",
  storageBucket: "lorenzotvmoies.appspot.com",
  messagingSenderId: "648393627311",
  appId: "1:648393627311:web:b3c04e60d72ce7d02a665a",
  measurementId: "G-BS14WSPG25",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
