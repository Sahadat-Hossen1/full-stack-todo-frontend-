import React from 'react'

export default function GoogleSignIn() {
    const handleGoogleSingIn=()=>{

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
