import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPFLP6l97DwWspnO69yRy3AoSyEbM4BII",
  authDomain: "house-marketplace-app-6b347.firebaseapp.com",
  projectId: "house-marketplace-app-6b347",
  storageBucket: "house-marketplace-app-6b347.appspot.com",
  messagingSenderId: "483046769154",
  appId: "1:483046769154:web:238a0dda4d0de6b1db1d1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();