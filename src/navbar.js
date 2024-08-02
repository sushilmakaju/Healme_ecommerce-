import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
            {/* <img src='https://imgs.search.brave.com/btQpKje3Z_cgWoRZHNjIznCaxH5ussG4SSWFUoV4xaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9oc0lMX3NETk1T/YWx0UjJGckJaSTZU/ZjlyNEE9LzExNng4/ODo4Nzd4ODQ5L2Zp/dC1pbi81MDB4NTAw/Lzk5ZGVzaWducy1j/b250ZXN0cy1hdHRh/Y2htZW50cy85NC85/NDc0Ny9hdHRhY2ht/ZW50Xzk0NzQ3NTIx' alt='Logo'/>      */}
            Logo
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    );
  };
  
  export default Navbar;