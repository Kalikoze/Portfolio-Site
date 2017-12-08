import React from 'react';
import menu from './assets/menu.svg';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <section className="mobile-menu">
        {/* <img src={menu} alt="Menu icon" /> */}
        <h2 className="menu-text">Menu</h2>
      </section>
      <ul>
        <a href='#home'>
          <p className="nav-text">Home</p>
        </a>
        <a href='#bio'>
          <p className="nav-text">Bio</p>
        </a>
        <a href='#tech'>
          <p className="nav-text">Tech</p>
        </a>
        <a href='#projects'>
          <p className="nav-text">Projects</p>
        </a>
        <a href='#contact'>
          <p className="nav-text">Contact</p>
        </a>
      </ul>
    </nav>
  )
}

export default Header;
