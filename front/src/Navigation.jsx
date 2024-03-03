import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const cleanToken = () => {
        localStorage.removeItem('accessToken')
    }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sign">Sign</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button onClick={cleanToken}>Salir</button></li>
      </ul>
    </nav>
  )
}

export default Navigation
