import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleUser() {
  const { id } = useParams();
  
  useEffect(() => {
    const getSpecificUserByID = async () => {
      const res = await fetch(`http://localhost:3000/users/${id}`);
      const data = await res.json();
      console.log(data);  
    };
    getSpecificUserByID();
  }, [id]);
  
  return (
    <div>
      {/* 
        it will be open when admin click a single user view button and there will be a close button to close the modal 
         */}
         <h1>SingleUser - ID: {id}</h1>
    </div>
  );
}
