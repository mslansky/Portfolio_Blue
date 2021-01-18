import React from 'react';
import './Contact.css'
import MyForm from './MyForm.js';

class Contact extends React.Component{
  render (){
    return(
      <div className="contact-page">

      <div className="overlay">
          <h1>Contact Me</h1>
          <h3>Reasons for Choosing US</h3>
          <p>Lorem, ipsum dolor sit amet consecte quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          
          <button>LinkedIn</button>
      </div>

      <MyForm/>

    </div>
    )
  }
}
  

export default Contact;