import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB6eH5FgbkBinSaSP_nLTF8rugwELVoR-s",
    authDomain: "studentinfo-35340.firebaseapp.com",
    projectId: "studentinfo-35340",
    storageBucket: "studentinfo-35340.appspot.com",
    messagingSenderId: "3819889181",
    appId: "1:3819889181:web:89612d401a02a858821cf4",
    measurementId: "G-8RL9QLJ3H9"
};

// Initializing the firebase app
const app = initializeApp(firebaseConfig);


// Setting up the DB
export const db = getFirestore(app);