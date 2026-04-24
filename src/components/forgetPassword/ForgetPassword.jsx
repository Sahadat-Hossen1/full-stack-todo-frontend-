import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebaseConfig/FirebaseConfig";

export default function ForgetPassword({ email, setErrorMessage }) {
  const [successMessage, setSuccessMessage] = useState("");
  
  const handlForgetPassword = () => {
    setSuccessMessage("");
    setErrorMessage("");
    
    if (email.trim() === "") {
      setErrorMessage("Please add an email");
      return;
    }
    
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Password reset email sent! Check your inbox.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        setErrorMessage(error.message);
        setSuccessMessage("");
      });
  };
  
  return (
    <>
      <button
        onClick={handlForgetPassword}
        type="button"
        className="text-indigo-600 hover:underline"
      >
        Forgot Password?
      </button>
      {successMessage && (
        <p className="text-green-600 text-sm mt-2">{successMessage}</p>
      )}
    </>
  );
}
