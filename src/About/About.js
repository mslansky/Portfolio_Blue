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
        <img src="https://images.unsplash.com/photo-1594271597920-4875033d248a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="black and white portrait"></img>

      </div>

      <div className="about-text">
        <p> Welcome to my page! ipsum lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      </div>

      <div className="quote">
        <p> “I never dreamed about success. I worked for it.”- Estée Lauder</p>
      </div>


      </div>
    )
  }
}

export default About;