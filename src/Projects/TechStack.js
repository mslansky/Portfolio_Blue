import React from 'react';
import './TechStack.css';




class  Techstack extends React.Component{
render (){
    return(

      <div className="tech-box">
        <h1 className="techs"> Tech Stack </h1>
        <div className="techimgs">
        <img src="/Techs/css.png" alt="css icon"></img>
        <img src="/Techs/html.png" alt="html icon"></img>
        <img src="/Techs/jquery.png" alt="jquery icon"></img>
        <img src="/Techs/js.png" alt="js icon"></img>
        <img src="/Techs/jsx.png" alt="jsx icon"></img>
        <img src="/Techs/react.png" alt="react icon"></img>
        <img src="/Techs/postgresql.png" alt="postgres icon"></img>
        <img src="/Techs/npm.png" alt="npm icon"></img>
        </div>

        <h1 className="tools"> Tool Stack </h1>
        <div className="toolimgs">
        <img src="/Techs/vscode.png" alt="vs code icon"></img>
        <img src="/Techs/vercel.png" alt="vercel icon"></img>
        <img src="/Techs/heroku.png" alt="heroku icon"></img>
        <img src="/Techs/github.png" alt="github icon"></img>
        <img src="/Techs/git.png" alt="git icon"></img>
        </div>
      </div>


    )
  
  } 
}

export default Techstack;