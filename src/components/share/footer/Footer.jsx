import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Logo / About */}
          <div>
            <h2 className="text-xl font-bold mb-2">Todos</h2>
            <p className="text-gray-400">
              Simple todo app to manage your daily tasks easily.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <ul className="space-y-1 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Todos</li>
              <li className="hover:text-white cursor-pointer">Profile</li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p className="text-gray-400">Email: example@email.com</p>
            <div className="flex gap-3 mt-2">
              <span className="cursor-pointer hover:text-blue-400">🌐</span>
              <span className="cursor-pointer hover:text-blue-400">📘</span>
              <span className="cursor-pointer hover:text-blue-400">🐦</span>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} Todos. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;