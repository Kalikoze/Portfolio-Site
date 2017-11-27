import React, { Component } from 'react';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Bio from '../Bio/Bio';
import Tech from '../Tech/Tech';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import './App.css';

class App extends Component {
  render() {
    configureAnchors({offset: -80, scrollDuration: 600})
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
