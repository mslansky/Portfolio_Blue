import React from 'react';
import './Projects.css';
import './ProjectBox.css';

class  ProjectBox extends React.Component{
  render(){
    return(
     
      <div className="box">

      <div className="flex">
        
        <div className="firstproj">
        <div className="card">
          <div className="image">
          <img src="https://user-images.githubusercontent.com/62613007/104239347-fec56200-541f-11eb-8709-4fdba18b137a.jpg" alt="application landing page featuring several images of dogs"/>
          </div>
          <div className="details">
            <div className="center">
              <h1>Pet Health Tracker</h1>
              <p>This application has been designed with your best friend's health in mind.
            Create a pet profile and document your pet's health through a series of diary entries.</p>
              <ul className="imgButtons">
                  <li><a href="https://pet-health-app.mslansky.vercel.app/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/domain.png" alt="internet symbol" /><i class="live-link" aria-hidden="true"></i></a></li>
                  <li><a href="https://github.com/mslansky/PetHealth-App" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github symbol"/><i class="github" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="firstproj-text">
            <p> Lorem Ipsum
            </p>
          </div>

          <div className="secondproj">
          <div className="card">
            <div className="image">
            <img src="https://user-images.githubusercontent.com/62613007/104973663-fee2d600-59ba-11eb-9a99-b119f2fd14d6.jpg" alt="application landing page featuring several images of dogs"/>
            </div>
            <div className="details">
              <div className="center">
                <h1>Boss Bot</h1>
                <p>Chatbot built to practice salary negotiations - Submission for Social Justice Hackathon hosted by Mintbean.io and App Academy</p>
                <ul>
                    <li><a href="https://mslansky.github.io/BossBot/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/domain.png" alt="internet symbol" className="linkIcon"/><i className="live-link" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/mslansky/BossBot" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github symbol"className="linkIcon"/><i className="github" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>

          <div className="thirdproj">
          <div className="card">
            <div className="image">
            <img src="https://user-images.githubusercontent.com/62613007/104973619-dce95380-59ba-11eb-9f97-31d834834dd3.jpg" alt="application landing page featuring several images of dogs"/>
            </div>
            <div className="details">
              <div className="center">
                <h1>Great British Baking Show</h1>
                <p>Mobile responsive, fun application meant to rate your knowledge of the Netflix T.V. Show - Great British Baking Show!</p>
                <ul>
                    <li><a href="https://mslansky.github.io/GBBSQuizApp/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/bubbles/50/000000/domain.png" alt="internet symbol"/><i class="live-link" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/mslansky/GBBSQuizApp" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github symbol"/><i class="github" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>


      </div>
      </div>

    )
  }
}

export default ProjectBox;