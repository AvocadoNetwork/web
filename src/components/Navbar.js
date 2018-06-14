import React from 'react'
import Link from 'gatsby-link'

import twitter from '../img/Twitter_Logo_Blue.svg'
import facebook from '../img/Facebook_icon.svg'
import telegram from '../img/Telegram_logo.svg'
import github from '../img/github-icon.svg'
import logo from '../img/logo.jpg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Avocado Token" style={{ width: '130px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/news">
          News
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://twitter.com/AvocadoToken"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.facebook.com/groups/808615902673092/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://t.me/AVOcadoToken"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={telegram} alt="Telegram" />
          </span>
        </a>        
        <a
          className="navbar-item"
          href="https://github.com/AvocadoNetwork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
