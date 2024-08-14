import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroPage from './Components/HeroPage/HeroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroPage/>
    </>
  )
}

export default App
