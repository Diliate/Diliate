// firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDooRIwbepInql6xQcOEHBULZ3rE7nF2b4",
    authDomain: "diliate-14faf.firebaseapp.com",
    projectId: "diliate-14faf",
    storageBucket: "diliate-14faf.appspot.com",
    messagingSenderId: "1000754618755",
    appId: "1:1000754618755:web:e9a553647a928db169d6b6",
    measurementId: "G-XRH80BE0QF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, analytics,db }; // Export analytics
