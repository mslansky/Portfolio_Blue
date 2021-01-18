import React from 'react';
import './Projects.css'


class  Projects extends React.Component{
render (){

    return(
    <div className="Projects">
      
      
      <div className="navbar">
          <a href="#about">About</a>
          <a href="/Projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
      </div>
      

      <div className="Project-Title">
        <h1> Projects </h1>
      </div>


      <div className="box">

        <div className="card">
          <div className="image">
          <img src="https://user-images.githubusercontent.com/62613007/104239347-fec56200-541f-11eb-8709-4fdba18b137a.jpg" alt="application landing page featuring several images of dogs"/>
          </div>
          <div className="details">
            <div className="center">
              <h1>Pet Health Tracker</h1>
              <p>This application has been designed with your best friend's health in mind.
            Create a pet profile and document your pet's health through a series of diary entries.</p>
              <ul>
                  <li><a href="https://pet-health-app.mslansky.vercel.app/"><img src="https://img.icons8.com/bubbles/50/000000/domain.png" alt="internet symbol"/><i class="live-link" aria-hidden="true"></i></a></li>
                  <li><a href="https://github.com/mslansky/PetHealth-App"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github symbol"/><i class="github" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
    )
  }
}

export default Projects;