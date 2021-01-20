import React from 'react';
import './Resume.css'


class  Resume extends React.Component{
render (){
  return(
      <div className="resume-box">

              <div className="top-nav">
                <ul>
                  <li><a href="/Projects">Projects</a></li>
                  <li><a href="/About">About</a></li>
                  <li><a href="/Resume">Resume</a></li>
                  <li><a href="/Contact">Contact</a></li>
                </ul>
              </div>
       
        <img src="/Techs/resume_madisonslansk.png" className="resume-img" alt="madison resume"></img>

      </div>
    )
  }
}

export default Resume;