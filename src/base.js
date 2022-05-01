// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFHbtSBHxc0LsWg6ovK_fLSlBJIhu9n1c",
  authDomain: "frc-fls-noga.firebaseapp.com",
  projectId: "frc-fls-noga",
  storageBucket: "frc-fls-noga.appspot.com",
  messagingSenderId: "708662060538",
  appId: "1:708662060538:web:897e31837455ac38ddb043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
