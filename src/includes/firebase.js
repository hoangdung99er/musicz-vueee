// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWtALCpLQohOWUDtU8iYY_uvkRfV3gT58",
  authDomain: "music-b9cb2.firebaseapp.com",
  projectId: "music-b9cb2",
  storageBucket: "music-b9cb2.appspot.com",
  messagingSenderId: "495713935027",
  appId: "1:495713935027:web:7d02332150f8ebd5461ac6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const userCollection = db.collection("users");
export const songCollection = db.collection("songs");
export const commentCollection = db.collection("comments");
