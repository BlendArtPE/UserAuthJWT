import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const cleanToken = () => {
        localStorage.removeItem('accessToken')
    }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/sign">Sign</Link></li>
        <li className="nav-item"><Link to="/profile">Profile</Link></li>
        <li className="nav-item"><button onClick={cleanToken}>Delete Token</button></li>
      </ul>
    </nav>
  )
}

export default Navigation
