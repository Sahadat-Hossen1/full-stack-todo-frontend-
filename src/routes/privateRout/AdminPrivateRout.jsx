import React, { useEffect } from 'react'
import useAuth from '../../context/auth/useAuth'
import { useNavigate } from 'react-router-dom'
import useAdmin from '../../context/Admin/useAdmin'

export default function AdminPrivateRout({ children }) {
    const {AllUsersData}=useAdmin()
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const isUserExist=AllUsersData.find((userData)=>userData.uid === user?.uid);
        if (isUserExist?.role === "admin") {

            // User is logged in, allow access to children
            return
        } else {
            // User is not logged in, redirect to login
            navigate("/")
        }
    }, [user?.uid, navigate, AllUsersData])

    // Show loading while checking auth
    if (!user) {
        return <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">Loading...</p>
        </div>
    }

    // If user exists, render the children
    return children
}
