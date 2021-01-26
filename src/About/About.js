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
        <p> Welcome to my page! ipsum lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="quote">
        <p> “I never dreamed about success. I worked for it.”- Estée Lauder</p>
      </div>


      </div>
    )
  }
}

export default About;