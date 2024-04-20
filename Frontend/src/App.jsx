import React from 'react'
import Home from './Home/Home';

import {Navigate, Route, Routes} from "react-router-dom"
import Courses from "../src/courses/Courses"
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';
import Contact from './components/contact/Contact';

function App() {
  const [authuser, setAuthUser]=useAuth()
console.log(authuser);
  return (
   <>
 
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path="/course" element={authuser?<Courses/>:<Navigate to="/signup"/>} />
   <Route path='/signup' element={<Signup/>}/>
   <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Toaster />
   
    </>
  )
}

export default App;

