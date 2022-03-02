// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcFWxJdtmdasKKD37Zvm_MaU5Di3lgdec",
  authDomain: "roockie-challenge-21.firebaseapp.com",
  databaseURL: "https://roockie-challenge-21-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "roockie-challenge-21",
  storageBucket: "roockie-challenge-21.appspot.com",
  messagingSenderId: "11702728126",
  appId: "1:11702728126:web:8c7ae28ef3eddf68b9b5ef",
  measurementId: "G-DQ8MT7JFNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);