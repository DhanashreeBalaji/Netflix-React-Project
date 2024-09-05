// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKuyuy5Y8S87h4NxRUE8ocSOHGVpLUol4",
  authDomain: "netflixgpt-ef993.firebaseapp.com",
  projectId: "netflixgpt-ef993",
  storageBucket: "netflixgpt-ef993.appspot.com",
  messagingSenderId: "736583010035",
  appId: "1:736583010035:web:616f47167fa7f45a00d986",
  measurementId: "G-46BB24ED88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
