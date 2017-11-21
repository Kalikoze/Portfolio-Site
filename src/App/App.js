import React, { Component } from 'react';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Bio from '../Bio/Bio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Bio />
      </div>
    );
  }
}

export default App;
