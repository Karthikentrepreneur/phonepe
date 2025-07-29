import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/logo192.png" alt="Logo" />
          <span>PaySecure</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;