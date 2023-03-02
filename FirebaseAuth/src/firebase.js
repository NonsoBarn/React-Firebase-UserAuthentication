import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
