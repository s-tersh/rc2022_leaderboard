import { initializeApp } from "firebase/app";

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

const app = initializeApp(firebaseConfig);
export default app.database().ref();