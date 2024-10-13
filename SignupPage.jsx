// src/pages/SignupPage.jsx
import React from 'react';
import Signup from '../components/Auth/Signup';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
