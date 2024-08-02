// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK0YWBOoDEGW9qrglx-pbJFmqCBAlmQ54",
  authDomain: "eat-smart-2024.firebaseapp.com",
  projectId: "eat-smart-2024",
  storageBucket: "eat-smart-2024.appspot.com",
  messagingSenderId: "1075502703090",
  appId: "1:1075502703090:web:f6710c0a86bbce00540b6b",
  measurementId: "G-F3EP9TGVT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
