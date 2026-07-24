import React from 'react'
import { Navigate } from 'react-router'
import { Outlet } from 'react-router'
const PublicRoute = () => {

    let isUserLoggedIn=localStorage.getItem("isLoggedIn")

if(isUserLoggedIn){
    return <Navigate to="/home"/>
}

  return <Outlet/>
}

export default PublicRoute