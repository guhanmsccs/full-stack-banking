import React, { useState } from 'react';
import './Navbar.css'; // Assuming you have a separate CSS file for styling

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <a href="#/login">LogIn</a>
          <a href='#/createaccount'>Create Account</a>
          <a href='#/deposit'>Deposit</a>
          <a href='#/withdraw'>Withdraw</a>
          <a href='/#userdetails'>Details</a>
          <a href='#/chatbox'>AI Chatbox</a>
          <div className="customer" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <a href="#">Customer Service</a>
            {isOpen && (
              <div className="dropdownContent">
                <a href="/#contact">Contact Us</a>
              </div>
            )}
          </div>
        </div>
        {/* Bank Name on the Right */}
        <div className="bank-name">
          State Bank of India
        </div>
      </div>
    </>
  );
}

export default Navbar;
