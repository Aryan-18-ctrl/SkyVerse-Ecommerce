import React from 'react'
import {  Route,Routes } from 'react-router'
import Home from './Home'
import SignIn from './SignIn'
import Signup from './Signup'
import MainRouter from './MainRouter'
import Navbar from '../components/Navbar'
import Shop from './Shop'
import About from './About'
import CategoryBased from './CategoryBased'
import ProtectedRoute from './ProtectedRoute'
import ProductDetail from './ProductDetail'
const AppRouter = () => {
  return (
      <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/register" element={<Signup/>}/>

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