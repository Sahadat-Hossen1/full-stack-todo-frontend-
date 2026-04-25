import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import auth from '../../firebase/firebaseConfig/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import useAdmin from '../../context/Admin/useAdmin'
import PostUser from '../../services/PostUser'
// import apiEndPoint from '../../apiEndPoint'

export default function GoogleSignIn() {
  // 
  const {AllUsersData}=useAdmin()
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
              const isAlreadyExist=AllUsersData.find((user)=>user.uid === result.user.uid);
              const newUser={
                // id:user.metadata.createdAt,
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
              if(!isAlreadyExist){
                await PostUser(newUser).then(()=>{
                  navigate('/')
                }).catch((error)=>{
                  console.log(error.message);
                })
              }else{
                console.log("user already exist");
                // Find the user's id from AllUsersData
                const existingUser = AllUsersData.find((u) => u.uid === user.uid);
                if (existingUser) {
                  fetch(`http://localhost:3000/api/users/${existingUser._id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({metadata:{
                      createdAt: user.metadata.createdAt,
                      lastLogin: user.metadata.lastLoginAt,
                      lastLogout: user.metadata.lastSignInTime,
                      lastSignInTime: user.metadata.lastSignInTime,
                    }}),
                  })
                    .then((res) => res.json())
                    .then((data) => console.log("User updated:", data))
                    .catch((err) =>
                      console.log("error from patch lastLogin", err),
                    );
                }
                navigate('/')
              }
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
