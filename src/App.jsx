import React from 'react'
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'
import Navbar from './components/Navbar'
import { Toaster } from "react-hot-toast";

import Home from '../src/Pages/Home'
import AppRouter from './Pages/AppRouter';
const App = () => {
  return (
<div className='min-h-screen bg-bg'>
{/* routees */}
<AppRouter/>


{/* toaster */}
<Toaster position="top-right"  reverseOrder={false}/>

</div>

  )
}

export default App