import React from 'react'
import './intro.scss';
import me from "../../assets/Akshay3.jpeg"
import bag from "../../assets/Bag.png"
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Akshay </span><br />Software Engineer</span>
        <p className="introPara">I am Skilled SDE with experiance in Devplopment and Automation</p>
        <Link>
          <button className="btn" onClick={() => {
            document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
          }}><img src={bag} alt="Hire-Me" className='bag' />Hire Me</button>
        </Link>
      </div>
      <img src={me} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro