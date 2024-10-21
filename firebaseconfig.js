// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKqqzH1HZwHryGfwdExAsD3uUitxM8P3E",
  authDomain: "econnect-eeed1.firebaseapp.com",
  projectId: "econnect-eeed1",
  storageBucket: "econnect-eeed1.appspot.com",
  messagingSenderId: "307854450213",
  appId: "1:307854450213:web:a918cc26ce6838b016a9cc",
  measurementId: "G-2VJ7MS292E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;