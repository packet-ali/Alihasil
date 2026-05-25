import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'

export const registerUser = async (
  email,
  password,
  role
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  await setDoc(doc(db, 'users', userCredential.user.uid), {
    uid: userCredential.user.uid,
    email,
    role,
    createdAt: new Date()
  })
}

export const loginUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logoutUser = async () => {
  return signOut(auth)
}export const loginUser = async ({
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
