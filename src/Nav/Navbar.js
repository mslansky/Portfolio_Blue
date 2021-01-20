import React from 'react';
import './Navbar.css'

class  Navbar extends React.Component{
render (){

    return(
    <div className="navbar">
      <div className="sidenav">
          <a href="#about">About</a>
          <a href="/Projects">Projects</a>
          <a href="/Resume">Resume</a>
          <a href="/Contact">Contact</a>
      </div>

      <div className="vl"></div>


      <div className="main">
          <div className="imgss">
            <img src="./Techs/profilepic.jpg" className="over-img" alt="smiling selfie of Madison"></img>
          </div>
      <h1>Madison Slansky</h1>
      <p>Website Developer || Software Engineer</p>
      </div>
    </div>
    )
  }
}

export default Navbar;