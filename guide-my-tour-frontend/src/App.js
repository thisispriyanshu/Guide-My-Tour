import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import SignUp from './SignUp';


function App() {
  return (
      // <Home/>
      // <SignUp/>
      <Router>
        <div>
          <Link to="/Home">Home</Link>
        </div>
        <div>
          <Link to="/SignUp">Sign Up</Link>
        </div>
        <hr />

        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
