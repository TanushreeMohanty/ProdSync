// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7Qw8cclXTZ03xr-VHtXddwDbKkt20lzw",
    authDomain: "prodsync-2025.firebaseapp.com",
    projectId: "prodsync-2025",
    storageBucket: "prodsync-2025.firebasestorage.app",
    messagingSenderId: "547523181590",
    appId: "1:547523181590:web:1be4cc4a991d6e59b58937",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
