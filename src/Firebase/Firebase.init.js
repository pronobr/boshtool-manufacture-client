// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG6ZE5mdIH_1ilycjqcmixqQfkwPu-XeA",
    authDomain: "assignment-twelve-b5da9.firebaseapp.com",
    projectId: "assignment-twelve-b5da9",
    storageBucket: "assignment-twelve-b5da9.appspot.com",
    messagingSenderId: "167840732140",
    appId: "1:167840732140:web:5f258f5a06b016718d26c9"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth =getAuth(app);

export default auth;