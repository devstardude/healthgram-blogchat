import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEJECXq1vt1xhhh2qHDVV9ZWU69EuXrNI",
  authDomain: "healthgram-blogchat.firebaseapp.com",
  projectId: "healthgram-blogchat",
  storageBucket: "healthgram-blogchat.appspot.com",
  messagingSenderId: "106172634986",
  appId: "1:106172634986:web:5ca97b6a00cf1c06933713",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export async function signInWithGoogle() {
  
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  
}

export function checkAuth(cb) {
  return auth.onAuthStateChanged(cb);
}

export async function logOut() {
  await auth.signOut();
}
