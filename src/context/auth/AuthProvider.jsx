import React from "react";
import AuthContext from "./AuthContext";
export default function AuthProvider({ children }) {
const userName="John Doe";;
const authInfo={
userName
}
  // 
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}
