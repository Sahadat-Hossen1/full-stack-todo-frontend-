import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebaseConfig/FirebaseConfig";
export default function AuthProvider({ children }) {
  //all state
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState({});
  
  // current user details with merged Firebase and JSON data
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser.uid) {
        setisLoading(true);
        
        // Fetch user data from JSON database
        const fetchUserData = async () => {
          try {
            const res = await fetch(
              `http://localhost:3000/users/${currentUser.uid}`
            );
            
            let dbData = {};
            // Only parse JSON if response is ok (200-299)
            if (res.ok) {
              dbData = await res.json();
              console.log("User data from DB:", dbData);
            } else {
              console.log("User not found in database, using default role");
            }
            
            // Merge Firebase data with JSON data
            const mergedUser = {
              // Firebase data
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              emailVerified: currentUser.emailVerified,
              isAnonymous: currentUser.isAnonymous,
              metadata: currentUser.metadata,
              // JSON database data
              ...dbData,
              // For easier access
              name: dbData?.name || currentUser.displayName,
              role: dbData?.role || 'user'
            };
            
            setUser(mergedUser);
          } catch (error) {
            console.log("Error fetching user data:", error);
            // Set user with default role on error
            setUser({
              ...currentUser,
              role: 'user'
            });
          }
        };
        
        fetchUserData();
      } else {
        setisLoading(false);
        setUser({});
      }
    });
  }, []);

  //all function
  // logout function

  useEffect(() => {
    console.log("User role:", user.role);
  }, [user]);

  const authInfo = {
    user,
    setisLoading,isLoading
    
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
