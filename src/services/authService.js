import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

function convertPhoneToEmail(phone) {
  return `${phone}@alihasil.com`;
}

export async function registerAccount(
  name,
  phone,
  password,
  role
) {
  const fakeEmail =
    convertPhoneToEmail(phone);

  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      fakeEmail,
      password
    );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    phone,
    role,
    createdAt: new Date(),
  });

  return user;
}

export async function loginAccount(
  phone,
  password
) {
  const fakeEmail =
    convertPhoneToEmail(phone);

  return signInWithEmailAndPassword(
    auth,
    fakeEmail,
    password
  );
}

export async function logoutAccount() {
  return signOut(auth);
}
