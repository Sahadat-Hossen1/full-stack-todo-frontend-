import React from "react";
import { Mail, Phone, MapPin, Edit, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebaseConfig/FirebaseConfig";
import useAuth from "../context/auth/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

export default function UserProfile() {

  const { user } = useAuth();
  console.log(user);
  
  // 
const navigate=useNavigate()
  // destructure safely
  const {
    displayName,
    uid,
    email,
    photoURL,
    phoneNumber,
    emailVerified,
    role
  } = user || {};

  const handleLogout = async () => {
  signOut(auth).then(()=>{
    navigate("/")
  })
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-indigo-500 to-blue-500 relative">
          <img
            src={photoURL}
            // src={photoURL || "https://i.pravatar.cc/150"}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white absolute -bottom-16 left-6 object-cover"
          />
        </div>

        {/* Content */}
        <div className="pt-20 pb-6 px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {displayName || "No Name"}
              </h2>

              <p className="text-gray-500">{role || "User"}</p>

              {/* Email Verification */}
              <div className="mt-1">
                {emailVerified ? (
                  <span className="text-green-600 text-sm">
                    ✅ Email Verified
                  </span>
                ) : (
                  <span className="text-red-500 text-sm">
                    ❌ Email Not Verified
                  </span>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              {user?.role === "admin" && (
                <NavLink
                  to="/admin"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 no-underline"
                >
                  Visit Admin Dashboard
                </NavLink>
              )}
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600">
                <Edit size={16} /> Edit
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            
            {/* Email */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <Mail className="text-indigo-500" />
              <span className="text-gray-700 break-all">{email}</span>
            </div>

            {/* Phone */}
            {phoneNumber && (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Phone className="text-indigo-500" />
                <span className="text-gray-700">{phoneNumber}</span>
              </div>
            )}

            {/* Location */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl md:col-span-2">
              <MapPin className="text-indigo-500" />
              <span className="text-gray-700">Dhaka, Bangladesh</span>
            </div>

            {/* UID */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl md:col-span-2">
              <span className="text-gray-500 text-sm">UID:</span>
              <span className="text-gray-700 text-sm break-all">
                {uid}
              </span>
            </div>
          </div>

          {/* About */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              About
            </h3>
            <p className="text-gray-600">
              Passionate MERN stack developer. Loves building web apps,
              solving problems, and learning new technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-bold text-indigo-500">25</h4>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-bold text-indigo-500">10</h4>
              <p className="text-gray-500 text-sm">Clients</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-bold text-indigo-500">1+</h4>
              <p className="text-gray-500 text-sm">Years Exp</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}