import React, { Component } from 'react';
import fire from './assets/fire.mp4';
import react from './assets/react-logo.png';
import redux from './assets/redux-logo.png';
import reactRouter from './assets/react-router-logo.png';
import node from './assets/nodejs-logo.png';
import express from './assets/express-logo.png';
import postgres from './assets/postgresql-logo.png';
import html5 from './assets/html5-logo.png';
import css3 from './assets/css3-logo.png';
import javascript from './assets/js-logo.png';
import mocha from './assets/mocha-logo.png';
import chai from './assets/chai-logo.png';
import enzyme from './assets/enzyme-logo.png';
import jest from './assets/jest-logo.png';
import git from './assets/git-logo.svg';
import github from './assets/github-logo.png';
import circleci from './assets/circleci-logo.png'
import './Tech.css';

export default class Tech extends Component {
  constructor() {
    super();
    this.state = {
      imgArr: [
        <img className="slideshow" src={react} alt="React Logo" key="React" />,
        <img className="slideshow" src={redux} alt="Redux Logo" key="Redux" />,
        <img className="slideshow" src={reactRouter} alt="React Router Logo" key="React Router" />,
        <img className="slideshow" src={node} alt="Node JS Logo" key="NodeJS" />,
        <img className="slideshow" src={express} alt="Express JS Logo" key="Express" />,
        <img className="slideshow" src={postgres} alt="Postresql Logo" key="Postgresql" />,
        <img className="slideshow" src={html5} alt="HTML5 Logo" key="HTML5"/>,
        <img className="slideshow" src={css3} alt="CSS3 Logo" key="CSS3" />,
        <img className="slideshow" src={javascript} alt="Javascript Logo" key="Javascript" />,
        <img className="slideshow" src={mocha} alt="Mocha JS Logo" key="Mocha" />,
        <img className="slideshow" src={chai} alt="Chai JS Logo" key="Chai" />,
        <img className="slideshow" src={enzyme} alt="Enzyme JS Logo" key="Enzyme" />,
        <img className="slideshow" src={jest} alt="Jest JS Logo" key="Jest" />,
        <img className="slideshow" src={git} alt="Git Logo" key="Git" />,
        <img className="slideshow" src={github} alt="GitHub Logo" key='GitHub' />,
        <img className="slideshow" src={circleci} alt="CircleCI Logo" key="CircleCI" />,
      ],
      displayedImgs: []
    }
  }

  componentDidMount() {
    this.carousel([0 , 1, 2, 3, 4]);
  }

  carousel(arr) {
    const { imgArr } = this.state;
    const images = [];

    const newArr = arr.map(num => {
      if (num === 15) {
        num = 0
      }
      return num += 1
    })

    newArr.forEach(num => images.push(imgArr[num]))

    setTimeout(() => this.carousel(newArr), 500);
    this.setState({displayedImgs: images})
  }

  render() {
    const { displayedImgs } = this.state;

    return (
      <section className='l-tech'>
        <video src={fire} autoPlay loop />
        <article className="l-section-title">
          <h2>Technical Experience</h2>
        </article>
        <section className='l-tech-skills'>
          {displayedImgs}
        </section>
      </section>
    )
  }
}
