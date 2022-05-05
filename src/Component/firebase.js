// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmrwAblfm7odBFMUZ5gTy36-doszysqk",
  authDomain: "nmdgtanan.firebaseapp.com",
  projectId: "nmdgtanan",
  storageBucket: "nmdgtanan.appspot.com",
  messagingSenderId: "174612598352",
  appId: "1:174612598352:web:6c5336bd6f8d5595f74b55"
};

// Initialize Firebase
const storage = initializeApp(firebaseConfig);

export default storage;