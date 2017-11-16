import React from 'react';
import Power from './assets/03 - Power.mp3'
import './Title.css';

const Title = () => {
  return (
    <section className="title">
      <audio src={Power} autoPlay loop />

    </section>
  )
}

export default Title;
