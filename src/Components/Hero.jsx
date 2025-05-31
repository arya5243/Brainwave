import React from 'react'
import { motion, scale } from 'motion/react'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1 > Explore the Possibilities <br /> of AI Chatting with <span> Brainwave <img src="https://ui8-brainwave-landing.herokuapp.com/_next/image?url=%2Fimages%2Fcurve.png&w=1920&q=75"/></span></h1>
            <p>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <motion.button scale={1}  whileTap={{scale:1.1}} >GET STARTED</motion.button>
        </div>
        
        <div className="hero-img gradient">
          <span><img src="https://github.com/adrianhajdin/brainwave/blob/main/src/assets/loading.png?raw=true" alt="" />AI is generating!</span>
        </div>
        <div className="hero-desc">
          <h5>Helping people create beautiful content at</h5>
          <ul>
            <li><img src="https://ui8-brainwave-landing.herokuapp.com/images/yourlogo.svg" alt="" /></li>
            <li><img src="https://ui8-brainwave-landing.herokuapp.com/images/yourlogo.svg" alt="" /></li>
            <li><img src="https://ui8-brainwave-landing.herokuapp.com/images/yourlogo.svg" alt="" /></li>
            <li><img src="https://ui8-brainwave-landing.herokuapp.com/images/yourlogo.svg" alt="" /></li>
            <li><img src="https://ui8-brainwave-landing.herokuapp.com/images/yourlogo.svg" alt="" /></li>
          </ul>
        </div>
    </div>
  )
}

export default Hero