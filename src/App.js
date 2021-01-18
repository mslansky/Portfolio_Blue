import './App.css';
import Navbar from './Nav/Navbar.js';
import Projects from './Projects/Projects.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Contact from './Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
        
          <Navbar/>
          
        </Route>
        
        <Route path="/Projects">
            <Projects/>
            
        </Route>

        <Route path="/Contact">
          <Contact/>
        </Route>

        </Switch>
      </Router>
    </div>


  );
}

export default App;
