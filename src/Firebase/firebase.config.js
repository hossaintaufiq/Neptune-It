// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkGnAPNhLCpAxJWz9pTH7_xg1q6G1drFc",
  authDomain: "neptune-it.firebaseapp.com",
  projectId: "neptune-it",
  storageBucket: "neptune-it.appspot.com",
  messagingSenderId: "300043932641",
  appId: "1:300043932641:web:793ed34fb4d1aa8bca38a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
