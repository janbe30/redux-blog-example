import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/:id" exact component={() => <SinglePost />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
