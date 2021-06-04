import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDBY7mmmOUvTzN4qtxtJIUzPwdXqUDAB3Y",
  authDomain: "aplikasi-demo-clone.firebaseapp.com",
  projectId: "aplikasi-demo-clone",
  storageBucket: "aplikasi-demo-clone.appspot.com",
  messagingSenderId: "602746713314",
  appId: "1:602746713314:web:69aaa471731a8bdbb49abb",
  measurementId: "G-TF5ZB8KDW8",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
