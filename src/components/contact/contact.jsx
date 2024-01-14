// Contact.js

import React, { useRef } from 'react';
import './contact.scss';
import planethub from '../../assets/planethub.png';
import springer from '../../assets/springer.png';
import coriolis from '../../assets/coriolis.png';
import fb from '../../assets/fb.png';
import x from '../../assets/x.png';
import linkedIn from '../../assets/linkedIn.png';
import insta from '../../assets/insta.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9twy67q', 'template_wwbwavc', form.current, 'jLc8lclsx383p3acj')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contactPage">
      <div id="clients">
        <h2 className="contactPageTitle">My Clients</h2>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies. Some of notable companies I have worked with include.
        </p>
        <div className="clientImgs">
          <img src={planethub} alt="PlanetHub" className="clientImg" />
          <img src={springer} alt="SpringerNature" className="clientImg" />
          <img src={coriolis} alt="Coriolis" className="clientImg" />
        </div>
      </div>
      <div id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name"/>
          <input type="email" className="email" placeholder="Your Email" name="from_email"/>
          <textarea name="message" rows="5" className="msg" placeholder="Your Message"></textarea>
          <button type="submit" className="submitBtn">Submit</button>
          <div className="links">
          <a href="https://www.linkedin.com/in/akshay-s-213319250" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn" className="link" />
            </a>
            <a href="https://twitter.com/AkshaySujgure" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Twitter" className="link" />
            </a>
            <a href="https://www.instagram.com/akshaysujgure" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="link" />
            </a>
            <a href="https://www.facebook.com/sujgureakshay/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;