import React from 'react';
import './Navbar.css'

class  Navbar extends React.Component{
render (){

    return(
    <div className="navbar">
      <div className="sidenav">
          <a href="#about">About</a>
          <a href="/Projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
      </div>

      <div className="vl"></div>


      <div className="main">
      <h1>Madison Slansky</h1>
      <p>Website Developer || Software Engineer</p>
      </div>
    </div>
    )
  }
}

export default Navbar;