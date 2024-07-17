// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQvbtHtHw7oGZekVZmiKxwa0Wl4K4tY1A",
  authDomain: "login-a-ed2dd.firebaseapp.com",
  projectId: "login-a-ed2dd",
  storageBucket: "login-a-ed2dd.appspot.com",
  messagingSenderId: "403717111348",
  appId: "1:403717111348:web:be734fb7953394dd1bd461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;