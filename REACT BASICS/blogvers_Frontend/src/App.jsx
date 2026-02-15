import { useState } from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Signin from './Signin'
import { Routes,Route } from 'react-router-dom'


function App() {
  
  return (
    
   
   <Routes>
    <Route path="/" element={<Signin/>}/>
    <Route path="/Signup" element= {<Signup/>}/>
    <Route path="/Login" element= {<Login/>}/>
    <Route path="/Signin" element= {<Signin/>}/>

    </Routes>
      

  )
}

export default App
