import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Todos</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span>👤 Profile</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500 px-2 py-1 rounded"
              >
                Logout
              </button>
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
          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Login
            </button>
          ) : (
            <>
              <span>👤 Profile</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;