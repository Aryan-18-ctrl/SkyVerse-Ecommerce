import React from 'react'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoute = () => {


const isLoggedIn =
  localStorage.getItem("isLoggedIn") === "true";
  
  return !isLoggedIn?<Navigate to="/" replace />:<Outlet/>


}

export default ProtectedRoute