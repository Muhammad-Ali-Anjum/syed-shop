import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
        <div class="main">
            <div class="logo">
                <a href="#">SYED</a>
            </div>
            <nav>
                <Link to="/home">HOME </Link>
                <Link to="#">SERVICES</Link>
                <Link to="/about">ABOUT </Link>
                <Link to="#">FEATURE </Link>
                <div class="con">
                    <a href="#">CONTACT</a>
                </div>
            </nav>
        </div>
  )
}

export default Header