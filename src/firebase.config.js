// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8uNsxKpM2IaMTXn1rvUnjQDWCQRfxPBQ",
  authDomain: "esipil-tech-hub-eeb17.firebaseapp.com",
  projectId: "esipil-tech-hub-eeb17",
  storageBucket: "esipil-tech-hub-eeb17.appspot.com",
  messagingSenderId: "371971285062",
  appId: "1:371971285062:web:d4f6d1949e485c60702a47",
  measurementId: "G-WH8JKWFF6H"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const db = getFirestore(app);

const storage = getStorage(app);

const analytics = getAnalytics(app);

export {app, auth, GoogleProvider, db, storage};
export default app;