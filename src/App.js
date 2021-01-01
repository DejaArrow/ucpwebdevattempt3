import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import HomePage from './pages/HomePage';
import Welcome from './pages/Welcome';
import NewsEvents from './pages/NewsEvents';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      
      <Switch>
        <Route path='/Welcome' exact component={Welcome} />
        <Route path='/' exact component= {HomePage} />
        <Route path='NewsEvents' exact component = {NewsEvents} />
      </Switch>
      </Router>
     
    </>
  );
}

export default App;
