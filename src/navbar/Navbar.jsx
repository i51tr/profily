import React from 'react';
import Logo from "../assets/Logo.png";
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
       <div className='menu-wrapper'>
       <img src={Logo} alt='logo' width="73px" height= "81px" />
       </div>
    </nav>
  )
}

export default Navbar