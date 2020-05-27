import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWMP1FdHph55mwt0-qMuDGPcQ-TZj6Hhw",
  authDomain: "oh-my-meme.firebaseapp.com",
  databaseURL: "https://oh-my-meme.firebaseio.com",
  projectId: "oh-my-meme",
  storageBucket: "oh-my-meme.appspot.com",
  messagingSenderId: "946957218718",
  appId: "1:946957218718:web:412123b50663549d279c8f",
  measurementId: "G-DWMDSE7QRK",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
