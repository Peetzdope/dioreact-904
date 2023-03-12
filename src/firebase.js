import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-R5h_cuU0Vh0lmOWsQg6dZyvb0x60iV8",
  authDomain: "dioreact-904.firebaseapp.com",
  projectId: "dioreact-904",
  storageBucket: "dioreact-904.appspot.com",
  messagingSenderId: "577158776545",
  appId: "1:577158776545:web:a620af479d4b97e344d9a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);