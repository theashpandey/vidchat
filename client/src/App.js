import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import './App.css';

function App() {
 
  return (

    <div className="App">
      
      <BrowserRouter>
      <h1 className="Apphe">VidChaT</h1>
        <Switch>
                  < Route path="/" exact component={CreateRoom}  />
        
          
          <Route path="/room/:roomID" component={Room} />
          
        </Switch>
        <p className="Appp">Project By-  <a href="https://github.com/theashpandey" > Ash Pandey</a> </p>
      </BrowserRouter>
    </div>
  );
}

export default App;