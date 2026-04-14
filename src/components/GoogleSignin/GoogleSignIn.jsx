import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import auth from '../../firebase/firebaseConfig/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function GoogleSignIn() {
  const googleProvider=new GoogleAuthProvider()
  const navigate=useNavigate()
    const handleGoogleSingIn=()=>{
          //  conent with google signin methode
          signInWithPopup(auth,googleProvider).then((result)=>{
            const user=result.user;
            // console.log(user);
            if (user.uid) {
              fetch("http://localhost:3000/users",{
                method:"POST",
                headers:{
                  "content-type":"application/json"
                },
                body:JSON.stringify({
                  name:user.displayName,
                  email:user.email,
                  uid:user.uid
                  })
              }).then(()=>{}).catch((error)=>{
                console.log(error.message);
              })
            }
            navigate('/')
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
