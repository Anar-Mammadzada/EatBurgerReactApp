import React from 'react'
import BurgerLogo from  '../assets/BurgerLogo.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img className='myImage' src={BurgerLogo} alt=''/>
            <div className='myLink'>
                <Link to='/'>Homepage</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
