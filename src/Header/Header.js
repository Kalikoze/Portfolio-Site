import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      dropDown: false
    }
  }

  render() {
    const { dropDown } = this.state;

    return (
      <nav onClick={() => this.setState({dropDown: !dropDown})}>
        <section className="mobile-menu">
          <h2 className="menu-text">Menu</h2>
        </section>
        <ul className={ dropDown ? 'drop-down' : ''}>
          <a href='#home' className={ dropDown ? 'drop-link' : ''}>
            <p className="nav-text">Home</p>
          </a>
          <a href='#bio' className={ dropDown ? 'drop-link' : ''}>
            <p className="nav-text">Bio</p>
          </a>
          <a href='#tech' className={ dropDown ? 'drop-link' : ''}>
            <p className="nav-text">Tech</p>
          </a>
          <a href='#projects' className={ dropDown ? 'drop-link' : ''}>
            <p className="nav-text">Projects</p>
          </a>
          <a href='#contact' className={ dropDown ? 'drop-link' : ''}>
            <p className="nav-text">Contact</p>
          </a>
        </ul>
      </nav>
    )
  }
}
