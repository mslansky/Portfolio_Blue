import React from 'react';
import './Projects.css';
import './ProjectBox.css';

class  ProjectBox extends React.Component{
  render(){
    return(
     
      <div className="box">

      <div className="flex">
        

      <div className="flexxx">
        <div className="finalproj">
        <div className="card">
          <div className="image">
          <img src="https://user-images.githubusercontent.com/62613007/110252780-a6f13600-7f4c-11eb-8732-27e7775a1846.jpg" alt="application landing page featuring several images of dogs"/>
          </div>
          <div className="details">
            <div className="center">
              <h1>Cottage</h1>
              <p>This fullstack application is my final capstone. Cottage is an E-Commerce Homemade Gourmet Bakery Site that allows for users to create a login and shop for local home baked goods!</p>
              <ul className="imgButtons">
                  <li><a href="https://cottage-lac.vercel.app/" rel="noopener noreferrer" target="_blank">Live Link<i className="live-link" aria-hidden="true"></i></a></li>
                  <li><a href="https://github.com/mslansky/Cottage" rel="noopener noreferrer" target="_blank">Github<i className="github" aria-hidden="true"></i></a></li>
              </ul>
              <p> Tech Stack Includes: React, JavaScript, JSX, HTML5, CSS3, Node.js, Express.js, Mocha, Chai</p>
            </div>
          </div>
        </div>
      </div>
      </div>


        <div className="flexxx">
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
                  <li><a href="https://pet-health-app.mslansky.vercel.app/" rel="noopener noreferrer" target="_blank">Live Link<i className="live-link" aria-hidden="true"></i></a></li>
                  <li><a href="https://github.com/mslansky/PetHealth-App" rel="noopener noreferrer" target="_blank">Github<i className="github" aria-hidden="true"></i></a></li>
              </ul>
              <p> Tech Stack Includes: React, JavaScript, JSX, HTML5, CSS3, Node.js, Express.js, Mocha, Chai</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flexxx">
          <div className="secondproj">
          <div className="card">
            <div className="image">
            <img src="https://user-images.githubusercontent.com/62613007/108124090-6482ba80-706c-11eb-814a-4d674fe93127.jpg" alt="application landing page featuring several images of dogs"/>
            </div>
            <div className="details">
              <div className="center">
                <h1>Petful</h1>
                <p>Petful Adoption Project designed to showcase my understanding of the Queue Data Structure Algorithm, allows users to "adopt" a pet who has been in the pound the longest. First In First Out!</p>
                <ul>
                    <li><a href="https://petful-gray.vercel.app/" rel="noopener noreferrer" target="_blank">Live Link<i className="live-link" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/mslansky/Petful" rel="noopener noreferrer" target="_blank">Github<i className="github" aria-hidden="true"></i></a></li>
                </ul>
                <p> Tech Stack Includes: React (React Hooks Used), JavaScript, JSX, HTML5, CSS3, Node, Express.js</p>
              </div>
            </div>
          </div>
          </div>
          </div>

          <div className="flexxx">
          <div className="thirdproj">
          <div className="card">
            <div className="image">
            <img src="https://user-images.githubusercontent.com/62613007/108124254-9d229400-706c-11eb-961e-b0965629e9e5.jpg" alt="application landing page featuring several images of dogs"/>
            </div>
            <div className="details">
              <div className="center">
                <h1>La Bouffe</h1>
                <p>Bonjour! This full-stack application allows you to practice learning french words for food. This application utilizes a linked-list to allow for the practice of stored words.</p>
                <ul>
                    <li><a href="https://spaced-repetition-la-bouffe.vercel.app" rel="noopener noreferrer" target="_blank">Live Link<i className="live-link" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/mslansky/spaced-repetition--la-bouffe" rel="noopener noreferrer" target="_blank">Github<i className="github" aria-hidden="true"></i></a></li>
                </ul>
                <p> Tech Stack Includes: React, JavaScript, JSX, HTML5, CSS3, Node.js, Express.js, Cypress Testing</p>
              </div>
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