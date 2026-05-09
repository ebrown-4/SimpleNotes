// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log("Firebase initialized");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDleJCQoNf4_w5m_dBYa0WTS-OW7ev2XkI",
    authDomain: "simplenotes-385e6.firebaseapp.com",
    projectId: "simplenotes-385e6",
    storageBucket: "simplenotes-385e6.appspot.com",   // ⭐ FIXED
    messagingSenderId: "1030525812219",
    appId: "1:1030525812219:web:13238db8eff3b976e5df5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
