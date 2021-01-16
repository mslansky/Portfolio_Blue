import React from 'react';
import './Navbar.css'

class  Navbar extends React.Component{
render (){

    return(
    <div class="navbar">
      <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
      </div>

      <div class="vl"></div>


      <div class="main">
      <h1>Madison Slansky</h1>
      <p>Website Developer || Software Engineer</p>
      </div>
    </div>
    )
  }
}

export default Navbar;