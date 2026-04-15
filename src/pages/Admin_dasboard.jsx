import React from "react";


export default function Admin_dashboard() {


  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
    

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold mt-2">1,250</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold mt-2">$8,430</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-2xl font-bold mt-2">320</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">John Doe</td>
                <td>john@example.com</td>
                <td className="text-green-500">Active</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Jane Smith</td>
                <td>jane@example.com</td>
                <td className="text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="py-2">Alex Brown</td>
                <td>alex@example.com</td>
                <td className="text-red-500">Blocked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
