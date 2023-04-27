import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Home.css";
const Footer = () => {
  return (
    <div>
        <div className='nav'> 
        <ul>
        <li>
          <NavLink to='/'>Product News</NavLink>
        </li>
        <li>
          <NavLink to='/Card'>Security</NavLink>
        </li>
        <li>
          <NavLink to='/Main'>Developers</NavLink>
        </li>
        <li>
          <NavLink to='/Footer' style={{color:"black"}}>Speed and Relaibility</NavLink>
        </li>
        <li>
          <NavLink to='/ZeroTrust'>Zero Trust</NavLink>
        </li>
        </ul>
      </div>
      <h1>This is Footer Page.</h1>
      <hr />
      <hr />
    </div>
  )
}

export default Footer
