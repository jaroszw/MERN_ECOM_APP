import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "imagestorage-5f37f.firebaseapp.com",
  projectId: "imagestorage-5f37f",
  storageBucket: "imagestorage-5f37f.appspot.com",
  messagingSenderId: "847791888846",
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);

export default app;
