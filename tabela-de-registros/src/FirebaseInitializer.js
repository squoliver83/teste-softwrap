import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBSZWT9GqR_YVLgWqQRKzsNWXZMkBTNGls",
  authDomain: "teste-softwrap.firebaseapp.com",
  databaseURL: "https://teste-softwrap.firebaseio.com",
  projectId: "teste-softwrap",
  storageBucket: "teste-softwrap.appspot.com",
  messagingSenderId: "685209093966",
  appId: "1:685209093966:web:9aa424619f60474c57001f",
  measurementId: "G-QZGG9XQCK0"
};
// Initialize Firebase function
export const startFirebase = () => firebase.initializeApp(firebaseConfig);
