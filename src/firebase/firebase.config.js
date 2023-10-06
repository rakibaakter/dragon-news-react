// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAwFSSyBrDsQvcwFYMhZeb6jmp7WWYbdk",
  authDomain: "dragon-news-72dc2.firebaseapp.com",
  projectId: "dragon-news-72dc2",
  storageBucket: "dragon-news-72dc2.appspot.com",
  messagingSenderId: "653004641687",
  appId: "1:653004641687:web:3899e7c2c2597462f320d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
