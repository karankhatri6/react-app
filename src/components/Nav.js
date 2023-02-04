import React from 'react'
import Logo from "../images/react-icon-small.png";

const Nav = () => {
  return (
    <nav className='navbar'>
        <img src={Logo} alt = "React Logo" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Nav