import React from 'react';
import './Footer.css'

class Footer extends React.Component{
  render (){
    return(
      <div class="footer">
              <a href="https://github.com/mslansky" rel="noopener noreferrer" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/madison-slansky/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a href="mailto:madison.slansky@gmail.com">Email Me!</a>
      </div>
    )
  }
}

export default Footer;