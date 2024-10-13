// src/pages/LoginPage.jsx
import React from 'react';
import Login from '../components/Auth/Login';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
