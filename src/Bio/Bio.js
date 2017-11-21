import React from 'react';
import profilePhoto from './assets/travis-profile.jpg';
import './Bio.css';

const Bio = () => {
  return (
    <section className="l-bio">
      <article className="l-section-title">
        <h2>A Man in the Making</h2>
      </article>
      <section className="l-bio-info">
        <article className="bio-text">
          <p>
            As a Software Developer, Travis strives to push himself to the limits as well as help motivate his colleagues to be the best they can. Although he has been a professional musician for more than 10 years, he is always trying to learn something new. He thrives off of new challenges and learning new technologies as well as working with people to create new experiences. He hopes to continue working in an environment that is built on teamwork and strives to challenge the norm.
          </p>
        </article>
          <img src={profilePhoto} />
      </section>
    </section>
  );
};

export default Bio;
