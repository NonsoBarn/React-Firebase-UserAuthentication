import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsWmgTB-UjtS7EaGsm23opulWUonQgwhU",
  authDomain: "react-authenticatin.firebaseapp.com",
  projectId: "react-authenticatin",
  storageBucket: "react-authenticatin.appspot.com",
  messagingSenderId: "1002672815710",
  appId: "1:1002672815710:web:e452e98d3a8140b0b17ecf",
  measurementId: "G-N1YBB3YHD7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
