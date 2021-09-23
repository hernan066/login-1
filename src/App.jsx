import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login'
import { Navbar } from './components/Navbar';


function App() {
  return (
    
    <Router>
        <div className="container">
          <Navbar />
            <Switch>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
                <Route path="/" exact>
                  Inicio...
                </Route>
            </Switch>
        </div>
      
    </Router>
  );
}

export default App;
