import React from 'react';
import Power from './assets/03 - Power.mp3'
import './Title.css';

const Title = () => {
  return (
    <body>
      <audio src={Power} autoPlay loop />

    </body>
  )
}

export default Title;
