import React from 'react';
import './ProjectImg.css';

const ProjectImg = ({img, alt, key, text, link}) => {
  return (
    <section className="project-container">
      <img src={img} alt={alt} key={key} />
      <article className="project-description">
        <h3 className="project-name">{alt}</h3>
        <hr />
        <p>{text}</p>
        <button onClick={() => window.open(link)}>VIEW LINK</button>
      </article>
    </section>
  )
}

export default ProjectImg
