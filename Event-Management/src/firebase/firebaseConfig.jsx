// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBONL2ajw3k0nvVYLRgHlbHa1cdb_gbTSc",
  authDomain: "event-management-7c344.firebaseapp.com",
  projectId: "event-management-7c344",
  storageBucket: "event-management-7c344.appspot.com",
  messagingSenderId: "18683794261",
  appId: "1:18683794261:web:71616e2a01a9e6ca99d5dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
