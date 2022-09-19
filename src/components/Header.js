import React from 'react'
import './header.css'
import logo from '../images/lol_logo.png'

function Header() {
  return (
    <div className='logo'>
      <img src={logo} alt="" />
    </div>
  )
}

export default Header
