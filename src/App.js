import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import HomePage from './pages/HomePage';
import Welcome from './pages/Welcome';
import NewsEvents from './pages/NewsEvents';
import ContactUs from './pages/ContactUs';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      
      <Switch>
        <Route path='/Welcome' exact component={Welcome} />
        <Route path='/' exact component= {HomePage} />
        <Route path='/NewsEvents' exact component = {NewsEvents} />
        <Route path='/ContactUs' exact component = {ContactUs} />
      </Switch>
      </Router>
     
    </>
  );
}

export default App;
