import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDfbvTJEF1Mw2aD1vrT6CkC-c8Py3wh83U",
  authDomain: "blog-fe0cf.firebaseapp.com",
  projectId: "blog-fe0cf",
  storageBucket: "blog-fe0cf.appspot.com",
  messagingSenderId: "747069475869",
  appId: "1:747069475869:web:57356647849d16d5da0af4"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
