import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCo_nqF-H98g99Zulf_b5xjdFz2fXTDFAg",
  authDomain: "freedom-fighter-7a97b.firebaseapp.com",
  projectId: "freedom-fighter-7a97b",
  storageBucket: "freedom-fighter-7a97b.appspot.com",
  messagingSenderId: "667958859937",
  appId: "1:667958859937:web:a263d90e05061b787ab8e0",
};

const app = firebase.initializeApp(firebaseConfig);
console.log("Connected");
export default app;
