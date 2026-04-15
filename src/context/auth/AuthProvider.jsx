import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebaseConfig/FirebaseConfig";

export default function AuthProvider({ children }) {
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setisLoading(false);
        return;
      }

      setisLoading(true);
console.log(currentUser);

      try {
        const res = await fetch(
          `http://localhost:3000/users?uid=${currentUser.uid}`
        );

        const users = res.ok ? await res.json() : [];
        const dbData = users?.[0] || {};

        const mergedUser = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          phoneNumber: currentUser.phoneNumber,
          emailVerified: currentUser.emailVerified,
          isAnonymous: currentUser.isAnonymous,
          metadata: currentUser.metadata,
          ...dbData,
          name: dbData?.name || currentUser.displayName,
          role: dbData?.role || "user",
        };

        setUser(mergedUser);
      } catch (error) {
        console.log("Error fetching user data:", error);
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          phoneNumber: currentUser.phoneNumber,
          emailVerified: currentUser.emailVerified,
          isAnonymous: currentUser.isAnonymous,
          metadata: currentUser.metadata,
          role: "user",
        });
      } finally {
        setisLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    setisLoading,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
