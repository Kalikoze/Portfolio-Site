import React from 'react';
import profilePhoto from './assets/travis-profile.jpg';
import renegadeVideo from './assets/Renegade Audio Productions.mp4';
import './Bio.css';

const Bio = () => {
  return (
    <section className="l-bio">
      <video src={renegadeVideo} autoPlay loop />
      <article className="l-section-title">
        <h2>A Man in the Making</h2>
      </article>
      <section className="l-bio-info">
        <article className="bio-text">
          <p>
            As a Software Developer, Travis strives to push himself to the limits as well as help motivate his colleagues to be the best they can. Although he has been a professional musician for more than 10 years, he is always trying to learn something new. He thrives off of new challenges and learning new technologies as well as working with people to create new experiences. He hopes to continue working in an environment that is built on teamwork and strives to challenge the norm.
          </p>
          <br />
          <p>
            After recently finishing the Front-End program at the Turing School of Software & Design, he has learned the importance of UI/UX experience, testing on multiple levels, and the power of diversity.  His strengths lie in creating simple and clean interfaces, bringing in various types of data, developing accounts with authorization, and pushing unique experiences.   With one ear to the sound of a new drum, and the other to the wisdom of other developers willing to impart their advice, Travis continues towards a new, fulfilling, and successful career.
          </p>
        </article>
          <img src={profilePhoto} />
      </section>
    </section>
  );
};

export default Bio;
