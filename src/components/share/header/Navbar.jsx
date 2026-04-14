import React, { useState } from "react";
import useAuth from "../../../context/auth/useAuth";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const {user}=useAuth();


return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">Todos</NavLink>
      

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {!user?.uid ? (
            <NavLink to="/login"
             
              className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600"
            >
              Login
            </NavLink>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink to="/userprofile">👤 Profile</NavLink>
              
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-3 flex flex-col gap-3 md:hidden">
          {!user?.uid ? (
            <NavLink to="/login"
              // onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Login
            </NavLink>
          ) : (
            <>
              <NavLink
               to="/userprofile" >👤 Profile</NavLink>
             
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;