import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login'
import { Navbar } from './components/Navbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  
  const [firabaseUser, setFirabaseUser] = useState(false);
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        if(user){
          setFirabaseUser(user);
        }else{
          setFirabaseUser(null);
        }
    });
  
  }, [])
  
  
  
  
  
  
  return firabaseUser !== false ? (
    
    
    
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
  ): (
    <p>Cargando...</p>
  )
}

export default App;
