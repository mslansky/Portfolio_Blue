import React from 'react';
import './Landing.css'
import {Link} from 'react-router-dom'


class  Landing extends React.Component{
render (){
  return(
      <div className="landing">

      <div className="overlays">
          <h1 className="contacts">Madison Slansky</h1>
          
         
          <button className="enter"><Link to={`/About`} className="enter">Enter</Link></button>
       
      </div>

      </div>
    )
  }
}

export default Landing;