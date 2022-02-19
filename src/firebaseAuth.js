// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVEoaZwK-ZQUjJ_7hUgnmWM8_-SrSWXWU",
    authDomain: "watchlist-development.firebaseapp.com",
    databaseURL: "https://watchlist-development-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "watchlist-development",
    storageBucket: "watchlist-development.appspot.com",
    messagingSenderId: "1018886316157",
    appId: "1:1018886316157:web:bb7dcf805dc35655241114",
    measurementId: "G-PGZ4JD9W5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)