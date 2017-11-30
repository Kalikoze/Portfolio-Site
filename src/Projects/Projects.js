import React, { Component } from 'react';
import tunnel from './assets/tunnel.mp4'
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section className='l-projects'>
        <video src={tunnel} autoPlay loop />
        <article className="l-section-title">
          <h2>Previous Applications</h2>
        </article>
        <section className='l-project-imgs'>
          <section className="project-grid">
            <img src="https://media.giphy.com/media/l378ukKFmxhFzXN16/giphy.gif" alt="Audio God Presentation" key="audioGod" />
            <img src="https://media.giphy.com/media/3o6nUWpSz05dnNREJO/giphy.gif" alt="Graffiti Graffix" key="graffitiGraffix" />
            <img src="https://media.giphy.com/media/l378AYmfy9nMxgekw/giphy.gif" alt="Movie Tracker" key="movieTracker" />
            <img src="https://media.giphy.com/media/3ohjUMhhvh7sQ0KhxK/giphy.gif" alt="Pattrn Party" key="pattrnParty" />
            <img src="https://media.giphy.com/media/l4EpgZnKr57Z0Y9O0/giphy.gif" alt="Swapi Box" key="swapiBox" />
            <img src="https://media.giphy.com/media/3ohjV4nQqULlWqJMmQ/giphy.gif" alt="Palette Picker" key="palettePicker" />
          </section>
        </section>
      </section>
    );
  };
};
