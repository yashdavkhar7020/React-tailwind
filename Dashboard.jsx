// src/pages/Dashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import Profile from './Profile'; // Ensure this is the correct path
import Settings from './Settings'; // Ensure this is the correct path
import DashboardHome from './DashboardHome'; // Ensure this is the correct path
import '../index.css';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content flex-1 bg-gray-100 p-4">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
