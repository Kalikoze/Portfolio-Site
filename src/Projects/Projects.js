import React, { Component } from 'react';
import tunnel from './assets/tunnel.mp4'
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section className='l-projects'>
        <video src={tunnel} autoPlay loop />
        <article className="l-section-title">
          <h2>Previous Projects</h2>
        </article>
        <section className='l-project-imgs'>
        </section>
      </section>
    );
  };
};
