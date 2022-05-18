// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6wCJDrAQGNqtLP-zmMkxqPcsR3AKprNs",
    authDomain: "my-fun-todo.firebaseapp.com",
    projectId: "my-fun-todo",
    storageBucket: "my-fun-todo.appspot.com",
    messagingSenderId: "499854633484",
    appId: "1:499854633484:web:2cd4cc265d4e833e645c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;