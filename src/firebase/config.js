import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "healthgram-blogchat.firebaseapp.com",
  projectId: "healthgram-blogchat",
  storageBucket: "healthgram-blogchat.appspot.com",
  messagingSenderId: "106172634986",
  appId: "1:106172634986:web:5ca97b6a00cf1c06933713",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
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

export async function uploadImage(uid,file) {
  const id = uid;
  const uploadTask = storage.ref(`images/${file.name}-${id}`).put(file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => console.log("image uploading", snapshot),
      reject,
      () => {
        storage
          .ref("images")
          .child(`${file.name}-${id}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
}