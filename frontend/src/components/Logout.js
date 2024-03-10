// Logout.js
import React from 'react';

const Logout = () => {
  // Handle logout logic here
  const handleLogout = () => {
    // Remove token from localStorage or perform any other cleanup
    alert('Logged out successfully');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
