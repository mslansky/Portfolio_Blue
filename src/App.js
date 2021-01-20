import './App.css';
import Navbar from './Nav/Navbar.js';
import Projects from './Projects/Projects.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from './Contact/Contact.js';
import Resume from './Resume/Resume';
import Landing from './Landing/Landing';
import About from './About/About.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          

          <Landing/>
          
        </Route>
        
        <Route path="/About">
            <About/>
            
        </Route>



        <Route path="/Projects">
            <Projects/>
            
        </Route>

        <Route path="/Contact">
          <Contact/>
        </Route>

        <Route path="/Resume">
          <Resume/>
        </Route>

        <Route path="/Navbar">
          <Navbar/>
        </Route>


        </Switch>
      </Router>
    </div>


  );
}

export default App;
