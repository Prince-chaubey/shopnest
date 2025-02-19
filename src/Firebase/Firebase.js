// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXMB95i8hKyOfDZAXbhGSyogRvzk5B738",
    authDomain: "shopnest-9bd5b.firebaseapp.com",
    projectId: "shopnest-9bd5b",
    storageBucket: "shopnest-9bd5b.firebasestorage.app",
    messagingSenderId: "343712189000",
    appId: "1:343712189000:web:a1955ef3113e949bbaa67d",
    measurementId: "G-MRNZ1X15MN"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);