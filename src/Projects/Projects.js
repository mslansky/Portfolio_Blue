import React from 'react';
import './Projects.css'
import ProjectBox from './ProjectBox.js'
import Footer from '../Footer/Footer.js'
import Techstack from './TechStack.js'

class  Projects extends React.Component{
render (){

    return(
    <div className="Projects">
        <h1 className="projtitle"> Projects </h1>
      
      <ProjectBox/>
      
      <Techstack/>
      
      <Footer/>
     
    </div>
    )
  }
}

export default Projects;