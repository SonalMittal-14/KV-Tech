import { useState } from 'react'
import HeroPage from './Components/HeroPage/HeroPage'
import { Navigate } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element= {<Navigate to='/login'/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/home' element = {<HeroPage/>}/>
      
    </Routes>
    </>
  )
}

export default App
