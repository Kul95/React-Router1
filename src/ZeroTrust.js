import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Home.css";
const ZeroTrust = () => {
  return (
    <div>
        <div className='nav'> 
        <ul>
        <li>
          <NavLink to='/' style={{color:"black"}}>Product News</NavLink>
        </li>
        <li>
          <NavLink to='/Card' style={{color:"black"}}>Security</NavLink>
        </li>
        <li>
          <NavLink to='/Main' style={{color:"black"}}>Developer</NavLink>
        </li>
        <li>
          <NavLink to='/Footer' style={{color:"black"}}>Speed and Relaibility</NavLink>
        </li>
        <li>
          <NavLink to='/ZeroTrust' style={{color:"black"}}>Zero Trust</NavLink>
        </li>
        </ul>
      </div>
      <h1>Zero Trust Code in my Page....</h1>
    </div>
  )
}
export default ZeroTrust;
