import React from 'react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import brainwave from '../assets/brainwave.svg'
import { navigation } from '../Constants';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState("/");
    const [baropen, setBarOpen] = useState(false);
   
  return (
    <nav>
        <div className="navbar">
            <Link 
            to="/">
              <div className="logo" onClick={()=> setIsOpen("/")}>
                <img src={brainwave} alt="" />
            </div>
            </Link>
            <div className="mobile-sidebar" style={{display: baropen ? "block" : "none"}}>
              <ul>
                {navigation.map((nav)=> {
                  return (
                      <Link
                      to={nav.url}
                      key={nav.id}>
                        <li 
                        onClick={()=> setIsOpen(`${nav.title}`)} 
                        className={nav.title == 'New account' ? 'signup'  : nav.title == 'Sign in' ? 'login ':'go' }>
                          {nav.title }
                          </li> 
                          </Link>
                      )
                })}
             </ul>
              </div>
            <div className="link-go">
                <ul>
                  {navigation.filter((item)=> !item.onlyMobile).map((nav)=>{
                    return (
                      <Link to={nav.url}
                      key={nav.id}>  
                      <li onClick={()=> setIsOpen(`${nav.title}`)} >{isOpen == nav.title ? <u style={{color:'white'}}>{nav.title}</u>: nav.title }
                      </li>
                      </Link>
                    )
                  })}
                </ul>
            </div>
            <div className="login-signup">
              <ul>
                {navigation.filter((item)=> item.onlyMobile).map((nav)=>{
                    return (
                      <Link to={nav.url}
                      key={nav.id}>
                        <li onClick={()=> setIsOpen(`${nav.title}`)} className={`${nav.title== "New account" ? "signup" : "login gradient2"}`}>{nav.title }
                      </li></Link>
                    )
                  })}
              </ul>
            </div>
            <div className="menu-btn" >
                <button onClick={()=> setBarOpen(!baropen)} className='gradient2'>{baropen ? <IoClose className='menu'/> : <IoMenu className='menu'/>}</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar