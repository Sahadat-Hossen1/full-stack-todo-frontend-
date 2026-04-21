import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import auth from './../firebase/firebaseConfig/FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import GoogleSignIn from "../components/GoogleSignin/GoogleSignIn";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const[errorMessage, setErrorMessage]=useState('');
  const navigate=useNavigate()
  // Handle form submission
  const handleLogin=(e)=>{
    e.preventDefault()
const formData=e.currentTarget;
const email=formData.email.value;
const password=formData.password.value;

signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
  const user=userCredential.user;
  if(user){
    console.log("Login successful")
    navigate('/')
    setErrorMessage('');
  }

  }).catch((error)=>{
    const errorMessage=error.message; 
    setErrorMessage(errorMessage);
    console.error("Login error:", errorMessage);
  })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋  
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account 
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-400">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-400">
              <Lock size={18} className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                className="w-full p-2 outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="text-right text-sm">
            <button
              type="button"
              className="text-indigo-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
                {/* error messege show */}
                <p className="text-red-500 text-sm">
                  {errorMessage}
                </p>
          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Login
          </button>
            
          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-300"></div>
            OR
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          
        </form>
          {/* Google Login */}
          <GoogleSignIn/>

        {/* Signup link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          New here?{" "}
          <Link to='/registration'
            className="text-indigo-600 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
