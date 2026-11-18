import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
        <div class="main">
            <div class="logo">
                <a href="#">SYED</a>
            </div>
            <nav>
                <Link to="/home">HOME </Link>
                <Link to="/about">SERVICES</Link>
                <Link to="#">ABOUT </Link>
                <Link to="#">FEATURE </Link>
                <div class="con">
                    <a href="#">CONTACT</a>
                </div>
            </nav>
        </div>
  )
}

export default Header