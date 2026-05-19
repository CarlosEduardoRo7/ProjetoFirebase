// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCkhkqoh7iRXf8Y_uGrMSvyN2AP4nseLxA",
  authDomain: "mobile2026-32e60.firebaseapp.com",
  projectId: "mobile2026-32e60",
  storageBucket: "mobile2026-32e60.firebasestorage.app",
  messagingSenderId: "168169870148",
  appId: "1:168169870148:web:7ca4d4c8cc166304b03d11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();