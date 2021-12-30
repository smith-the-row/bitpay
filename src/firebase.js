import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

const firebaseConfig = {
  apiKey: "AIzaSyAS4GkIWlrhCYgdQduP68MzbVvY6_FRhLw",
  authDomain: "investment-site.firebaseapp.com",
  projectId: "investment-site",
  storageBucket: "investment-site.appspot.com",
  messagingSenderId: "353822051324",
  appId: "1:353822051324:web:44d643f171a22cc9d60079",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
