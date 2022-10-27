// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzqJmcc953QK7x2EbWnOBZyyP7Md7U13g",
  authDomain: "next-learner-app.firebaseapp.com",
  projectId: "next-learner-app",
  storageBucket: "next-learner-app.appspot.com",
  messagingSenderId: "808897668478",
  appId: "1:808897668478:web:64ae5d4173a6385432bf2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;