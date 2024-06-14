import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/navbar.css';

function NavBar() {
  return (
    <div className='nav-bar'>
      <p className='title'>Cameron Allan</p>
      <nav>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Projects">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
