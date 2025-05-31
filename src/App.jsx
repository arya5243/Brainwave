import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Features from './Components/Features.jsx'
import { motion } from "motion/react"

const App = () => {
  return (
    <motion.div className='main-cont' initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
      <Navbar/>
      <Hero/>
      <Features/>
    </motion.div>
  )
}

export default App