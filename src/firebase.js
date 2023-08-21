// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFqlpwVFuZUkEzlaS6TGp1w6fx8O0mNe8",
  authDomain: "chatapp-3ea59.firebaseapp.com",
  projectId: "chatapp-3ea59",
  storageBucket: "chatapp-3ea59.appspot.com",
  messagingSenderId: "29340508535",
  appId: "1:29340508535:web:267e5e07366285a6a90172"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
