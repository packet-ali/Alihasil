import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [currentUser,
    setCurrentUser] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {

          if (user) {

            const userRef =
              doc(
                db,
                "users",
                user.uid
              );

            const userSnap =
              await getDoc(userRef);

            if (userSnap.exists()) {

              setCurrentUser({
                uid: user.uid,
                ...userSnap.data(),
              });

            }

          } else {

            setCurrentUser(null);

          }

          setLoading(false);

        }
      );

    return unsubscribe;

  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);