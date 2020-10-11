import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASezUbCJtMOcHsrLR9ZJZAF1IIGMCX-jM",
  authDomain: "feruzjon-amzn.firebaseapp.com",
  databaseURL: "https://feruzjon-amzn.firebaseio.com",
  projectId: "feruzjon-amzn",
  storageBucket: "feruzjon-amzn.appspot.com",
  messagingSenderId: "866967668017",
  appId: "1:866967668017:web:d00b8f1dd0cd2539fb1c10",
  measurementId: "G-84YQKM9REN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
