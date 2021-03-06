// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnN04SmHY6jJvioQaW6aySTK6gAo6OeO0",
  authDomain: "todos-ee4a3.firebaseapp.com",
  projectId: "todos-ee4a3",
  storageBucket: "todos-ee4a3.appspot.com",
  messagingSenderId: "656807300574",
  appId: "1:656807300574:web:001dbe1c383524dca4a14f",
  measurementId: "G-WYZ3MJFTW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();