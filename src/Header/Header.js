import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <p className="nav-text">Bio</p>
        </li>
        <li>
          <p className="nav-text">Tech</p>
        </li>
        <li>
          <p className="nav-text">Projects</p>
        </li>
        <li>
          <p className="nav-text">Contact</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
