// src/components/dashboard/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="relative flex items-center space-x-4">
        <div className="text-gray-700">Username</div>
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Profile" 
          className="rounded-full h-10 w-10 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
            <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
            <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
            <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
