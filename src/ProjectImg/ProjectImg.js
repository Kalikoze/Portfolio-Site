import React from 'react';
import './ProjectImg.css';

const ProjectImg = ({img, alt, key}) => {
  return (
    <section className="project-container">
      <img src={img} alt={alt} key={key} />
      <article className="project-description">
        <p>Text Here</p>
        <button onClick={() => window.open('https://www.fandango.com/')}>VIEW LINK</button>
      </article>
    </section>
  )
}

export default ProjectImg
