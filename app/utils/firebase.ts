// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrui5Jf-Qv49tMiGDo0tg6RSCBUrELvl4",
  authDomain: "skillsync-learning-app.firebaseapp.com",
  projectId: "skillsync-learning-app",
  storageBucket: "skillsync-learning-app.firebasestorage.app",
  messagingSenderId: "71013416127",
  appId: "1:71013416127:web:4bd7e699f5ed777599da0a",
  measurementId: "G-94CQJPT24R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
