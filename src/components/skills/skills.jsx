import React from 'react'
import './skills.scss';
import dev from '../../assets/dev.png'
import lang from '../../assets/languages.png'
import automation from '../../assets/automation.png'
import js from '../../assets/js.png'
import python from '../../assets/pyton.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import django from '../../assets/django.png'
import githubActions from '../../assets/GitHub Actions.png'
import jenkins from '../../assets/jenkins.png'
import cypress from '../../assets/cypress.png'
import selenium from '../../assets/selenium.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDisc">I am Software Development Engineer and Automation framework devlopment and skilled and experianced with various technologies mentioned bellow.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={lang} alt="language" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Languages</h2>
                    <ul>
                        <li>
                            <img src={js} alt="JavaScript Icon" className="icon" />
                            JavaScript
                        </li>
                        <li>
                            <img src={python} alt="Python Icon" className="icon" />
                            Python
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skillBar">
                <img src={dev} alt="devlopment" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Development</h2>
                    <ul>
                        <li>
                            <img src={react} alt="React Icon" className="icon" />    
                            React
                        </li>
                        <li>
                            <img src={node} alt="Node Icon" className="icon" />
                            Node.js
                        </li>
                        <li>
                            <img src={django} alt="Django Icon" className="icon" />
                            Django
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skillBar">
                <img src={automation} alt="automation" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Automation</h2>
                    <ul>
                        <li>
                            <img src={githubActions} alt="Github Actions Icon" className="icon" />
                            Github Actions
                        </li>
                        <li>
                            <img src={jenkins} alt="Jenkins Icon" className="icon" />
                            Jenkins
                        </li>
                        <li>
                            <img src={cypress} alt="Cypress Icon" className="icon" />
                            Cypress
                        </li>
                        <li>
                            <img src={selenium} alt="Selenium Icon" className="icon" />
                            Selenium
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills