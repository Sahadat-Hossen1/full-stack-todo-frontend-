import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebaseConfig/FirebaseConfig';
import GoogleSignIn from '../components/GoogleSignin/GoogleSignIn';
import PostUser from '../services/PostUser';

export default function Registration() {
      const [showPassword, setShowPassword] = useState(false);
      const[errorMessage, setErrorMessage]=useState('');
      // 

    const navigate=useNavigate()
    // Handle form submission
    const handleRegistration=(e)=>{
        e.preventDefault()
    const formData=e.currentTarget;
    const name=formData.name.value;
    const email=formData.email.value;
    const password=formData.password.value;
    // console.log(name,email,password);
  //  register user with firebase authentication
     createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        const user=userCredential.user;
      if(user){
        updateProfile(auth.currentUser,{displayName:name}).then(async()=>{
          console.log("user name updated");
          console.log(user);
          const newUser={
            uid:userCredential.user.uid,
            displayName:name,
            email,
            photoURL:userCredential.user.photoURL,
            phoneNumber:userCredential.user.phoneNumber,
            metadata:{
              createdAt:userCredential.user.metadata.createdAt,
              lastLogin:userCredential.user.metadata.lastLoginAt,
              lastLogout:userCredential.user.metadata.lastSignInTime,
              lastSignInTime:userCredential.user.metadata.lastSignInTime
            },
            role:"user"
          }
          await PostUser(newUser);
            navigate("/")
        }).catch((error)=>{
          console.log(error);
          setErrorMessage(error.message);
        })
      }
      }).catch((error)=>{
        console.log(error);
        setErrorMessage(error.message);
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
        <form className="space-y-5" onSubmit={handleRegistration}>
            {/* Name */}    
            <div>
            <label className="text-sm font-medium text-gray-700">                               
              Name
            </label>
            <div className="flex items-center border rounded-xl px-3 mt-1 focus-within:ring-2 focus-within:ring-indigo-400">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
          </div>
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

          {/* Password   */}
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
         
         
         {
          errorMessage && <p className="text-red-500">{errorMessage}</p>
         }
          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Register  
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-300"></div>
            OR
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <GoogleSignIn/>
        </form>

        {/* Signup link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          New here?{" "}
          <Link to='/login'
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login to your account
          </Link>
        </p>
      </div>
    </div>
  )
}
