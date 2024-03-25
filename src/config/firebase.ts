// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDgggPWcgyBkMo2CzDMXLHP6klIfzZfeA",
  authDomain: "reactapp-de5c1.firebaseapp.com",
  projectId: "reactapp-de5c1",
  storageBucket: "reactapp-de5c1.appspot.com",
  messagingSenderId: "383748587230",
  appId: "1:383748587230:web:1f7bc2331efdcdaa484c4f",
  measurementId: "G-X41KDN3MD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);