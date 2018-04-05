import React from 'react';
import logo from './logo.png';
import './styles.css';

const Header = () => {
  return (
    <div className="header-title">
      <img src={logo} className="header-logo" alt="logo" />
      <h2>React Redux To Do App</h2>
    </div>
  );
};

export default Header;
