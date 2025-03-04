import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0LWvcRSgZ5omTTBCWDLlg8UM1H3lifyo",
    authDomain: "form-727b7.firebaseapp.com",
    projectId: "form-727b7",
    storageBucket: "form-727b7.appspot.com",
    messagingSenderId: "729619186715",
    appId: "1:729619186715:web:364f06467c11d011f724be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
