import React from 'react'
import {  Route,Routes } from 'react-router'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import Signup from '../Pages/Signup'
import MainRouter from './MainRouter'
import Navbar from '../components/Navbar'
import Shop from '../Pages/Shop'
import About from '../Pages/About'
import ProtectedRoute from './ProtectedRoute'
import CategoryBased from '../Pages/CategoryBased'
import ProductDetail from '../Pages/ProductDetail'
import PublicRoute from './PublicRoute'
const AppRouter = () => {
  return (
      <Routes>
        <Route  element={<PublicRoute/>} >

    <Route path="/" element={<SignIn/>}/>
    <Route path="/register" element={<Signup/>}/>

        </Route>


<Route element={<ProtectedRoute/>}>
       <Route element={<MainRouter/>}>
    <Route path="/home" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
        <Route path="/details/:id" element={<ProductDetail/>}/>

<Route path="/category/:categoryName" element={<CategoryBased/>}/>
 </Route>
</Route>
  </Routes>
 
  )
}

export default AppRouter