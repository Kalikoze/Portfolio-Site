import React, { Component } from 'react';
import ProjectImg from '../ProjectImg/ProjectImg';
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
            <ProjectImg
              img="https://media.giphy.com/media/l378ukKFmxhFzXN16/giphy.gif"
              alt="Audio God"
              key="audioGod"
              text="This application is similar to a drum machine in that you can use the arrow keys to play different sounds. It is also similar to a digital DAW in that a user can mix and manipulate sounds just as one would on a real soundboard. The user can change sounds using the sound library and assigning new sounds to each track. Each of these sounds can be altered by clicking the track you want to edit, and moving the knobs in the audio effects section."
              link="https://github.com/Kalikoze/Audio-God"
             />
            <ProjectImg
              img="https://media.giphy.com/media/3o6nUWpSz05dnNREJO/giphy.gif"
              alt="Graffiti Graffix"
              key="graffitiGraffix"
              text="This web application allows users to create a profile and add images of their graffiti work, follow other graffiti artists, and comment on other user's images. A user can also search and sort through user profiles alphabetically, by newest artists, and by popularity. We have also implemented a search feature, which allows users to look up a specific user."
              link="https://github.com/Kalikoze/GraffitiGraffix"
            />
            <ProjectImg
              img="https://media.giphy.com/media/l378AYmfy9nMxgekw/giphy.gif"
              alt="Movie Tracker"
              key="movieTracker"
              text="This application is similar to other movie tracking applications in that a user can log in or create an account and track the movies they are most interested in. By hovering over a movie, a user can read a brief description of the movie as well as the overall review of the movie. The user can also favorite movies that they would like to see or purchase tickets through fandango.com."
              link="https://github.com/anajauregui/Movie-Tracker"
            />
            <ProjectImg
              img="https://media.giphy.com/media/3ohjUMhhvh7sQ0KhxK/giphy.gif"
              alt="Pattrn Party"
              key="pattrnParty"
              text="This idea of having a small library of page components is outlined in Brad Frost's Style Guide. The SMACSS framework was used for the CSS of this project. The main focus on this project was to write semantic HTML, well organized and clear CSS, and dry, well factored Javascript. You can click on any of the buttons in order to be linked to a CodePen with that component's code."
              link="https://github.com/Kalikoze/Pattrn-Party"
            />
            <ProjectImg
              img="https://media.giphy.com/media/l4EpgZnKr57Z0Y9O0/giphy.gif"
              alt="Swapi Box"
              key="swapiBox"
              text="Swapi Box was an application built to practice using numerous promises and how to optimize loading times.  It also gave my partner and I and chance to write DRY code and learn how to reuse components.  The user can look through the various planets, people, and vehicles in Star Wars history and even save them to their favorites to look at later on."
              link="https://github.com/christielynam/swapi-box"
            />
            <ProjectImg
              img="https://media.giphy.com/media/3ohjV4nQqULlWqJMmQ/giphy.gif"
              alt="Palette Picker"
              key="palettePicker"
              text="This application allows the user to select random palettes by pressing the space bar.  The user can also lock in a particular palette by clicking on it in order to save it while they continue to finding other matching colors.  Afterwards, they can create a new project and save the palette to it.  They can then go back to that palette anytime they desire by clicking on it."
              link="https://github.com/Kalikoze/Palette-Picker"
            />
          </section>
        </section>
      </section>
    );
  };
};
