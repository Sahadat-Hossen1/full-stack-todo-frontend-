import React from "react";
import {
  Home,
  Users,
  Settings,
  BarChart3,
  LogOut,
  HomeIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="space-y-4">
        <NavLink to="/admin" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Home size={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/allusers" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <Users size={18} />
          <span>Users</span>
        </NavLink>
        <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <BarChart3 size={18} />
          <span>Analytics</span>
        </div>
        <NavLink
          to="/"
          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex  items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <HomeIcon size={18} />
          <span>Home</span>
        </NavLink>
      </nav>

      <div className="mt-10 border-t pt-4">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
