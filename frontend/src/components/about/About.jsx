import React from 'react'
import './about.css'
import moi from '../../assets/sport.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Bilal " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>Personal Realtions</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>1 Completed</small>
              </article>
            </div>
            <p>
              I am a future software engineer currently undaergoing a Bachelors degree
              at the Faculty of Engineering and Technology(FET) of the University of Buea. 
              I get my 'A level' in 2020. Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Eum aspernatur minima unde praesentium?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor quis? 
              Possimus, deleniti ullam earum mollitia laudantium Lorem, ipsum dolor.
              dignissimos exercitationem eveniet numquam quidem inventore adipisci voluptas, 
              suscipit assumenda natus, accusantium nam!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
