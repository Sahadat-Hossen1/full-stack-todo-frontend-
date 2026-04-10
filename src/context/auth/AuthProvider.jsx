import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from './../../firebase/firebaseConfig/FirebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
export default function AuthProvider({ children }) {
//all state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser]=useState({});
  // current user details
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      // console.log(currentUser.uid);
      if(currentUser){
        setIsLoggedIn(true);
        setUser(currentUser);
      }
      
    })
  },[])
//all function
useEffect(()=>{
  console.log(user);
},[user])
  
const authInfo={
isLoggedIn,setIsLoggedIn,user
}
  // 
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}
