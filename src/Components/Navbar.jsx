import React from 'react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import brainwave from '../assets/brainwave.svg'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState("/");
    const [baropen, setBarOpen] = useState(false);
  return (
    <nav>
        <div className="navbar">
            <div className="logo" onClick={()=> setIsOpen("/")}>
                <img src={brainwave} alt="" />
            </div>
            <div className="mobile-sidebar" style={{display: baropen ? "block" : "none"}}>
              <ul>
                <li onClick={() => setIsOpen("features")}>FEATURES</li>
                <li onClick={() => setIsOpen("pricing")}>PRICING</li>
                <li onClick={() => setIsOpen("use")}>HOW TO USE</li>
                <li onClick={() => setIsOpen("roadmap")}>ROADMAP</li>
                <li className="signup">NEW ACCOUNT</li>
                <li className="login">SIGN IN</li>
             </ul>
              </div>
            <div className="link-go">
                <ul>
                    <li onClick={()=> setIsOpen("features")}>{isOpen =="features" ? <u style={{color:'white'}}>FEATURES</u>: "FEATURES" }</li>
                    <li onClick={()=> setIsOpen("pricing")}>{isOpen =="pricing" ? <u style={{color:"white"}}>PRICING</u>: "PRICING" }</li>
                    <li onClick={()=> setIsOpen("use")}>{isOpen =="use" ? <u style={{color:"white"}}>HOW TO USE</u>: "HOW TO USE" }</li>
                    <li onClick={()=> setIsOpen("roadmap")}>{isOpen =="roadmap" ? <u style={{color:"white"}}>ROADMAP</u>: "ROADMAP" }</li>
                </ul>
            </div>
            <div className="login-signup">
                    <button className='signup'>NEW ACCOUNT</button>
                    <button className='login gradient2'><span>SIGN IN</span></button>
            </div>
            <div className="menu-btn" >
                <button onClick={()=> setBarOpen(!baropen)} className='gradient2'>{baropen ? <IoClose className='menu'/> : <IoMenu className='menu'/>}</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar