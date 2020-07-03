import React from 'react';
import './App.css';
import MainContainer from '../src/containers/MainContainer'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
        <div className="App">
          <Route path="/" exact component={MainContainer} />
          <Route path="/:date" component={MainContainer} />
        </div>
    </Router>
  );
}

export default App;
