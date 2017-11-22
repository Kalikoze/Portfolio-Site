import React from 'react';
import react from './assets/react-logo.png';
import redux from './assets/redux-logo.png';
import reactRouter from './assets/react-router-logo.png';
import node from './assets/nodejs-logo.png';
import express from './assets/express-logo.png';
import postgres from './assets/postgresql-logo.png';
import git from './assets/git-logo.svg';
import github from './assets/github-logo.png';
import mocha from './assets/mocha-logo.png';
import chai from './assets/chai-logo.png';
import enzyme from './assets/enzyme-logo.png';
import jest from './assets/jest-logo.png';
import circleci from './assets/circleci-logo.png'
import html5 from './assets/html5-logo.png';
import css3 from './assets/css3-logo.png';
import javascript from './assets/js-logo.png';
import './Tech.css';

const Tech = () => {
  return (
    <section className='l-tech'>
      <article className="l-section-title">
        <h2>Technical Experience</h2>
      </article>
      <section className='l-tech-skills'>
        <img className="slideshow" src={react} />
        <img className="slideshow" src={redux} />
        <img className="slideshow" src={reactRouter} />
        <img className="slideshow" src={node} />
        <img className="slideshow" src={express} />
        <img className="slideshow" src={postgres} />
        <img className="slideshow" src={html5} />
        <img className="slideshow" src={css3} />
        <img className="slideshow" src={javascript} />
        <img className="slideshow" src={mocha} />
        <img className="slideshow" src={chai} />
        <img className="slideshow" src={enzyme} />
        <img className="slideshow" src={jest} />
        <img className="slideshow" src={git} />
        <img className="slideshow" src={github} />
        <img className="slideshow" src={circleci} />
      </section>
    </section>
  )
};

export default Tech;
