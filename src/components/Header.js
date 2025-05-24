import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <div className="header-icons">
        <input type="search" placeholder="Search" />
        <button>🔔</button>
        <button>+</button>
        <img src="https://storage.googleapis.com/a1aa/image/701d9c0c-7302-45ed-d40a-1c9326b75e45.jpg" alt="User  Avatar" />
      </div>
    </header>
  );
};

export default Header;
