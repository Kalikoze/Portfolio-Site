import React, { Component } from 'react';
import waves from './assets/waves.mp4';
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <section className="l-contact">
        <video src={waves} autoPlay loop muted />
        <article className="l-section-title">
          <h2>Contact Information</h2>
        </article>
        <section className="l-contact-form">
          <p className="email-phone">Kalikoze@gmail.com | (570) 280-5024</p>
          <form action="https://formspree.io/kalikoze@gmail.com" method="POST">
            <label for="name">Name: </label>
            <input id="name" type="text" name="name" />
            <label for="email">Email: </label>
            <input id="email" type="email" name="_replyto" />
            <input type="submit" value="Send" />
        </form>
        </section>
      </section>
    )
  }
}
