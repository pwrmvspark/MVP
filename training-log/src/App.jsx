import React from 'react';

import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import TrainingSchedule from './TrainingSchedule.jsx'
import CreateExercise from './CreateExercise.jsx'
import { Router, Route, Switch } from "react-router";

function App() {
  return (

      <div className="App-container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/schedule" exact component={TrainingSchedule} />
        <Route path="/createExercise" exact component={CreateExercise} />
      </div>

  );
}

export default App;
