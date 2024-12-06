import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import './navbar.scss';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
}

export default NavBar;
