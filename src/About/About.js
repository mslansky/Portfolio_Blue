import React from 'react';
import './About.css'


class  About extends React.Component{
render (){
  return(
      <div className="about">

      <div className="top-nav">
          <ul>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Resume">Resume</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>

      </div>

      <div className="about-flex">
      <div className="about-img">
      <img src="/Techs/smileprofile.jpg" alt="Madison in black and white profile"></img>
      </div>
      </div>

      <div className="about-text">
        <p> Welcome to my page! My name is Madison and I am a software engineer in Denver, Colorado! I love to bake, I love to hike, and I love my pets! I have experience in Healthcare, and a Sociology undergraduate degree from Texas A&M. People are my passion, and I believe in making a difference.

        Technology is inspirational, and has unlimited possibilities. My goals are to create responsive, engaging UX that allows for people to communicate. I have experience developing full-stack applications with proficiency in HTML/CSS, React, Node, Express, JavaScript, and Postgresql. I am searching for a team where I can dive into making the world a better place, one application at a time. </p>
      </div>

      <div className="quote">
        <p> “I never dreamed about success. I worked for it.”- Estée Lauder</p>
      </div>


      </div>
    )
  }
}

export default About;