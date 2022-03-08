import React, { useState,useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 640) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

    return (
        <div className='navbar'>
            <div className='logo'>
            <Link to='/' className='logolink'>
              <i className="fas fa-home" onClick={closeMobileMenu}></i></Link>
            </div>
        </div>
    )
}

export default Navbar