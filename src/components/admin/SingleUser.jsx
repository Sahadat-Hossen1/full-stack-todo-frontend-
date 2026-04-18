import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleUser() {
  const { id } = useParams();
  const navigate = useNavigate();
//
const[singleUser,setSingleUser] =useState([])
//
useEffect(()=>{
  const getSingleUser=async()=>{
    const response=await fetch(`http://localhost:3000/users?id=${id}`)
    const data=await response.json()
    console.log(data[0]?.metadata?.createdAt);
    
    setSingleUser(data)
  }
  getSingleUser()
},[id])
console.log(singleUser);


  if (!singleUser) {
    return <p className="text-center mt-10">User Not Found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">
        
        <h2 className="text-2xl font-semibold mb-6 text-center">
          User Details
        </h2>

        {
          singleUser.map((user)=>(
            <div className="space-y-3 text-gray-700" key={user.id}>
          <p>
            <span className="font-medium">Name:</span>{" "}
            {user.displayName}
          </p>

          <p>
            <span className="font-medium">Email:</span>{" "}
            {user.email}
          </p>

          {/* <p>
            <span className="font-medium">Total Todos:</span>{" "}
            {user.todos.length}
          </p> */}
          

          <p>
            <span className="font-medium">Account Created:
            {/* {user?.metadata?.createdAt} */}
              {new Date(Number(user?.metadata?.createdAt)).toLocaleString()}

              </span>{" "}
          </p>

          <p>
            <span className="font-medium">
              Last Sign In:
            {user?.metadata?.lastLoginAt ? new Date(Number(user?.metadata?.lastLoginAt)).toLocaleString() : "Never"}
              </span>{" "}
          </p>
        </div>
          ))
        }

        {/* Back Button */}
        <button
          onClick={() => navigate("/admin/allusers")}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
        >
          Back
        </button>
      </div>
    </div>
  );
}