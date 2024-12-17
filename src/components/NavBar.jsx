import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
        <a href="/">ABC 
        Cinemas</a>
    </div>
    <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Book Tickets</a></li>
        <li><a href="/services">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
  )
}

export default NavBar