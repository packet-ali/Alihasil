import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

const convertPhoneToEmail = (phone) => {
  return `${phone}@alihasil.com`;
};

export const registerUser = async ({
  phone,
  password,
}) => {

  const email =
    convertPhoneToEmail(phone);

  const result =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const user = result.user;

  await setDoc(
    doc(db, "users", user.uid),
    {

      fullName: "Pengguna Baru",

      phone,

      role: "customer",

      totalCoins: 0,

      totalWaste: 0,

      environmentalImpact: 0,

      createdAt: serverTimestamp(),

      isVerified: true,

    }
  );

  return user;

};

export const loginUser = async ({
  phone,
  password,
}) => {

  const email =
    convertPhoneToEmail(phone);

  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );

};

export const logoutUser = async () => {
  return signOut(auth);
};

export const logoutAccount =
  async () => {

    await signOut(auth);

};