import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import auth from '../../firebase/firebaseConfig/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import PostUser from '../../services/PostUser'
// import apiEndPoint from '../../apiEndPoint'

export default function GoogleSignIn() {
  // google sign in methode 
  const googleProvider=new GoogleAuthProvider()
  // navigate

  const navigate=useNavigate()
  // 
    const handleGoogleSingIn=()=>{
          //  conent with google signin methode
          signInWithPopup(auth,googleProvider).then(async(result)=>{
            const user=result.user;
            console.log(user);
            if (user.uid) {
              const newUser={
                uid:user.uid,
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL,
                phoneNumber:user.phoneNumber,
                 metadata:{
              createdAt:user.metadata.createdAt,
              lastLogin:user.metadata.lastLoginAt,
              lastLogout:user.metadata.lastSignInTime,
              lastSignInTime:user.metadata.lastSignInTime
            },
                role:"user"
              }
              await PostUser(newUser)
              navigate('/')
            }
          }).catch((error)=>{
            console.log(error);
          })
          


    }
  return (
    <>
    <button
            type="button"
            onClick={handleGoogleSingIn}
            className="w-full py-3 border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
    </>
  )
}
