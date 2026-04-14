import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebaseConfig/FirebaseConfig";
export default function AuthProvider({ children }) {
  //all state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  //get All users
  useEffect(()=>{
    fetch("http://localhost:3000/users").then((res)=>res.json()).then((data)=>setAllUsers(data)).catch((err)=>{
      console.log(err.message);
      
    })
  },[])
  // current user details
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser.uid);
      if (currentUser) {
        setIsLoggedIn(true);
        setUser(currentUser);
      } else {
        setIsLoggedIn(false);
        setUser({});
      }
    });
  }, []);

  //all function
  // logout function

  useEffect(() => {
    console.log(user);
  }, [user]);

  const authInfo = {
    user,
    setIsLoggedIn,
    allUsers,isLoggedIn
    
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
