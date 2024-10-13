// src/pages/Settings.jsx
import React from 'react';
import '../index.css';

const Settings = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
        <p className="mt-2 text-gray-600">Settings options go here.</p>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Account Settings</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">Change Password</li>
            <li className="text-gray-700">Manage Two-Factor Authentication</li>
            <li className="text-gray-700">Email Notifications</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">App Settings</h3>
          <ul className="list-disc pl-5">
            <li className="text-gray-700">Language Preferences</li>
            <li className="text-gray-700">Theme Settings</li>
            <li className="text-gray-700">Privacy Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
