import React from 'react';
import './Contact.css'
import MyForm from './MyForm.js';
import Footer from '../Footer/Footer.js'

class Contact extends React.Component{
  render (){
    return(
      <div className="contact-page">

      <div className="top-nav">
          <ul>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Resume">Resume</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>

      </div>
        

      <div className="overlay">
          <h1 className="contact">Contact Me</h1>
          <h3>I look forward to hearing from you.</h3>
          <p>Send me a message, say hello, or ask a question.</p>
          <p> Need more information? Check out my LinkedIn and my Github.</p>
          <button className="contact-button"><a href="https://www.linkedin.com/in/madison-slansky/" rel="noopener noreferrer" target="_blank" className="contact-button">LinkedIn</a></button>
          <div className="empty"></div>
          <button className="github-button"><a href="https://github.com/mslansky" rel="noopener noreferrer" target="_blank" className="contact-button">Github</a></button>
      </div>

      <div className="myForm">
      <MyForm/>
      </div>
      
      <div className="quote2">
        <p> “I never dreamed about success. I worked for it.”- Estée Lauder</p>
      </div>

      <Footer/>

    </div>
    )
  }
}
  

export default Contact;