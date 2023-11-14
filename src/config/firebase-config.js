// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcNu-tlbXF8_v9uGmtXIZOye1w23QrJfk",
  authDomain: "personalportfolio-12878.firebaseapp.com",
  projectId: "personalportfolio-12878",
  storageBucket: "personalportfolio-12878.appspot.com",
  messagingSenderId: "225493838085",
  appId: "1:225493838085:web:b999f33a95e3905f682f6c",
  measurementId: "G-EWB20BN3TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);