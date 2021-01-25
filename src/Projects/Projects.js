import React from 'react';
import './Projects.css'
import ProjectBox from './ProjectBox.js'
import Footer from '../Footer/Footer.js'
import Techstack from './TechStack.js'

class  Projects extends React.Component{
render (){

    return(
    <div className="Projects">

              <div className="top-nav">
                <ul>
                  <li><a href="/Projects">Projects</a></li>
                  <li><a href="/About">About</a></li>
                  <li><a href="/Resume">Resume</a></li>
                  <li><a href="/Contact">Contact</a></li>
                </ul>
              </div>

        <ProjectBox/>
      
      <Techstack/>
      
     
     
    </div>
    )
  }
}

export default Projects;