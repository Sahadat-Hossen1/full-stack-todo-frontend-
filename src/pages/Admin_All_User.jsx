import React from 'react'
import useAdmin from '../context/Admin/useAdmin'
import { Mail, Shield, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Admin_All_User() {
    const {AllUsersData}=useAdmin()
  return (

 <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        All Users
      </h1>

      {/* Users Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {AllUsersData.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                {user.displayName?.charAt(0) || "U"}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {user.displayName || "No Name"}
                </h2>
                <p className="text-sm text-gray-500">ID: {user._id}</p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>{user.email}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Shield size={16} />
                <span className="capitalize">Role: {user.role}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs break-all">
                <User size={14} />
                <span>UID: {user.uid}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-2">
              <NavLink to={`/admin/allusers/${user._id}`} className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-2 rounded-lg transition text-center">
                View
              </NavLink>
              {/* <button className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 text-sm py-2 rounded-lg transition">
                Remove
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
