import React, { Component } from 'react';
import Power from './assets/03 - Power.mp3';
import codeLoop from './assets/Code-Loop.mov';
import './Title.css';

export default class Title extends Component {
  render() {
    return (
      <section className="title">
        <audio src={Power} autoPlay loop />
        <video src={codeLoop} autoPlay loop />
        <article className="overlay">
          <h1>Developing For The Future</h1>
        </article>
      </section>
    );
  };
};
