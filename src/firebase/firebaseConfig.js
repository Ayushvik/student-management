// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjR_1NUspIHlZCZD9l5f1DNeYfWLn8PjQ",
  authDomain: "student-management-db841.firebaseapp.com",
  projectId: "student-management-db841",
  storageBucket: "student-management-db841.firebasestorage.app",
  messagingSenderId: "604053975031",
  appId: "1:604053975031:web:05aab7a2b4fb6d341a88f2",
   measurementId: "G-CX6919Q42H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
