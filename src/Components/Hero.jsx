import React from 'react'
import { motion, scale } from 'motion/react'
import curve from '../assets/hero/curve.png'
import Generating from './Generating'
import { Link } from 'react-router-dom'
import { companyLogos } from '../Constants'

const Hero = () => {
  return (
    <div className="hero" loading="lazy" >
        <div className="hero-text">
            <h1 > Explore the Possibilities <br /> of AI Chatting with <span> Brainwave <img src={curve}/></span></h1>
            <p>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <Link to='/pricing'
            ><motion.button scale={1}  whileTap={{scale:1.1}} >
              GET STARTED
              </motion.button>
              </Link>
        </div>
        
        <div className="hero-img gradient">
          <Generating />
        </div>

        <div className="hero-desc">
          <h5>
            Helping people create beautiful content at
          </h5>
          <ul>
            {companyLogos.map((logo,idx)=>{
              return <li key={idx}><img src={logo} alt="logo" /></li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default Hero