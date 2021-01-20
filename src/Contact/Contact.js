import React from 'react';
import './Contact.css'
import MyForm from './MyForm.js';
import Footer from '../Footer/Footer.js'

class Contact extends React.Component{
  render (){
    return(
      <div className="contact-page">

      <div className="overlay">
          <h1 className="contact">Contact Me</h1>
          <h3>I look forward to hearing from you.</h3>
          <p>Lorem, ipsum dolor sit amet consecte quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          
          <button>LinkedIn</button>
      </div>

      <div className="myForm">
      <MyForm/>
      </div>
      

      <Footer/>

    </div>
    )
  }
}
  

export default Contact;