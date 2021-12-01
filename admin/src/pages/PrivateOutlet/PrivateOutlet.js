import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateOutlet({ children }) {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return admin ? children : <Navigate to="/login" />;
}

export default PrivateOutlet;
