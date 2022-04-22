import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2lv6o8esmp7vGMOcOsxzEcMupdv6S8FM",
  authDomain: "bitpay-site.firebaseapp.com",
  projectId: "bitpay-site",
  storageBucket: "bitpay-site.appspot.com",
  messagingSenderId: "349384195746",
  appId: "1:349384195746:web:416c5cb29202ef239421fb",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
