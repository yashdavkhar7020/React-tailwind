// src/components/dashboard/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-4">MyApp</h2>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/dashboard" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/profile" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link 
            to="/settings" 
            className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
