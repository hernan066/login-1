import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';


function App() {
  return (
    
    <Router>
        <div className="container">
          <Navbar />
            <Switch>
                <Route path="/login">
                  login...
                </Route>
                <Route path="/admin">
                  admin...
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
