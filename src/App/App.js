import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Bio from '../Bio/Bio';
import Tech from '../Tech/Tech';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    configureAnchors({offset: -80, scrollDuration: 600})
    return (
      <section className="app">
        <Header />
        <ScrollableAnchor id="home">
          <Title />
        </ScrollableAnchor>
          <ScrollableAnchor id="bio">
            <Bio />
          </ScrollableAnchor>
        <ScrollableAnchor id="tech">
          <Tech />
        </ScrollableAnchor>
        <ScrollableAnchor id="projects">
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <Contact />
        </ScrollableAnchor>
      </section>
    );
  }
}

export default App;
