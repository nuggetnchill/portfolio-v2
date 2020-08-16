import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.style.scss";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <img alt='logo' src={logo} />
      </Link>
      <ul>
        <Link className='link' to='/about'>
          ABOUT
        </Link>

        <Link className='link' to='/projects'>
          PROJECTS
        </Link>

        <Link className='link' to='/contact'>
          CONTACT
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
