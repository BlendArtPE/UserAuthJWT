import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const cleanToken = () => {
        localStorage.removeItem('accessToken')
    }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/sign">Login</NavLink></li>
        <li className="nav-item"><NavLink to="/profile">Profile</NavLink></li>
        <li className="nav-item"><button className='nib' onClick={cleanToken}>Delete Token</button></li>
      </ul>
    </nav>
  )
}

export default Navigation
