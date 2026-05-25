import { initializeApp } from "firebase/app";

import {
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

import {
  getStorage,
} from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBdaZFslvkLWUTzbMaVJ7kIdLLOMzYOifc",

  authDomain: "alihasil-80ae6.firebaseapp.com",

  projectId: "alihasil-80ae6",

  storageBucket: "alihasil-80ae6.firebasestorage.app",

  messagingSenderId: "314024074839",

  appId: "1:314024074839:web:1e968ec6faa6f1bd9e4d12",

  measurementId: "G-LMG7XLH7QY"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;