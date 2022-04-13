// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYWO8e8rz7qCGLRvsWVHFMqCy8o0VM9CU",
  authDomain: "practice-project-8524f.firebaseapp.com",
  projectId: "practice-project-8524f",
  storageBucket: "practice-project-8524f.appspot.com",
  messagingSenderId: "693741671812",
  appId: "1:693741671812:web:a2ceb2927c74c42975f9d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
