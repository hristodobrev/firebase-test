// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqJOqucB3qDtpo_NplG3HbtC3oxmcFEdA",
  authDomain: "messenger-b6a81.firebaseapp.com",
  databaseURL: "https://messenger-b6a81.firebaseio.com",
  projectId: "messenger-b6a81",
  storageBucket: "messenger-b6a81.appspot.com",
  messagingSenderId: "483601485834",
  appId: "1:483601485834:web:d55a0bb8418b9ddf5a8ff3",
  measurementId: "G-SVEPDZP8P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);