import React from 'react'
import useAuth from '../../context/auth/useAuth'
import { Navigate } from 'react-router-dom'

export default function PrivateRout({ children }) {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">Loading...</p>
        </div>
    }

    if (!user?.uid) {
        return <Navigate to="/" replace />
    }

    return children
}
