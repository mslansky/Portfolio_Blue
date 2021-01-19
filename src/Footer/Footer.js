import React from 'react';
import './Footer.css'

class Footer extends React.Component{
  render (){
    return(
      <div class="footer">
              <div className="icons">
              <a href="www.linkedin.com/in/madison-slansky"><img src="https://img.icons8.com/android/24/000000/linkedin.png" alt="internet symbol"/><i class="live-link" aria-hidden="true"></i></a>
              </div>
              <div className="icons">
              <a href="https://github.com/mslansky"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github symbol"/><i class="github" aria-hidden="true"></i></a>
              </div>
      </div>
    )
  }
}

export default Footer;