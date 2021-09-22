import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    
    <Router>
        <div className="container">
          navbar...
            <Switch>
                <Route path="/login">
                  login...
                </Route>
                <Route path="/admin">
                  admin...
                </Route>
                <Route path="/">
                  Inicio...
                </Route>
            </Switch>
        </div>
      
    </Router>
  );
}

export default App;
