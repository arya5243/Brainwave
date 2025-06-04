import React, { useState } from 'react'
import {benefits} from '../Constants'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Features = () => {
  const [scroll,setscroll] =useState("Ask anything")
  return (
    <div className="features">
        <div className="features-text">
            <h2>Chat Smarter, Not Harder <br/> with Brainwave</h2>
        </div>
        <div className="features-div">
          <ul>
            {benefits.map((data)=>{
              return <Link to='/features' style={{color:'white'}}>
              <div className="feature" style={{boxShadow:`${data.light ? 'none' : '60px 0 100px -10px rgba(0, 0, 255, 0.27)'}`,borderRadius:'80px'}}>
                <li key={data.id} ><img src={data.backgroundUrl} alt="" /></li>
                  <div className="feature-about">
                     <div className="feature-title">
                        <h5>{data.title}</h5>
                      </div>
                      <div className="feature-text">
                        <p>{data.text}</p>
                      </div>
                      <div className="feature-to">
                        <div className="feature-to-img">
                            <img src={data.iconUrl} alt="" />
                        </div>
                        <div className="feature-to-text">
                          <h5>EXPLORE MORE <IoIosArrowForward/> </h5>
                        </div>
                      </div>
                  </div>
              </div>
              </Link>
            })}
          </ul>
        </div>
        <div className="feature-scroll">
            {benefits.map((data)=>{
              return <div onClick={() => setscroll(data.title)} style={data.title == scroll ? { outline:'2px solid blue'} :{border : 'none'}} ><span ></span></div>
            })}
        </div>
    </div>
  )
}

export default Features