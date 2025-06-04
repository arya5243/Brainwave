import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Benefits from './Components/Benefits.jsx'
import { motion } from "motion/react"

const App = () => {
  return (
    <motion.div className='main-cont' initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
      <Navbar/>
      <Hero/>
      <Benefits/>
    </motion.div>
  )
}

export default App