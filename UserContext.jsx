import React, { createContext, useState } from 'react';

// Create a UserContext
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user information

  const login = (userData) => {
    setUser(userData); // Update user state with the logged-in user's data
  };

  const signup = (userData) => {
    setUser(userData); // Update user state with the signed-up user's data
    // In a real app, you'd also store this in your backend
  };

  const logout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children} {/* Render children components that will have access to this context */}
    </UserContext.Provider>
  );
};

export default UserProvider;
