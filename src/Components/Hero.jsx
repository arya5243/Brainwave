import React from 'react'
import { motion, scale } from 'motion/react'
import loading from '../assets/loading.png'
import yourlogo from '../assets/yourlogo.svg'
import curve from '../assets/hero/curve.png'

const Hero = () => {
  return (
    <div className="hero" loading="lazy" >
        <div className="hero-text">
            <h1 > Explore the Possibilities <br /> of AI Chatting with <span> Brainwave <img src={curve}/></span></h1>
            <p>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <motion.button scale={1}  whileTap={{scale:1.1}} >GET STARTED</motion.button>
        </div>
        
        <div className="hero-img gradient">
          <span><img src={loading} alt="" />AI is generating!</span>
        </div>
        <div className="hero-desc">
          <h5>Helping people create beautiful content at</h5>
          <ul>
            <li><img src={yourlogo} alt="" /></li>
            <li><img src={yourlogo} alt="" /></li>
            <li><img src={yourlogo} alt="" /></li>
            <li><img src={yourlogo} alt="" /></li>
            <li><img src={yourlogo} alt="" /></li>
          </ul>
        </div>
    </div>
  )
}

export default Hero