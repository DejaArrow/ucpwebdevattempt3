import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import HomePage from './pages/HomePage';
import Welcome from './pages/Welcome';
import NewsEvents from './pages/NewsEvents';
import ContactUs from './pages/ContactUs';
import PrivacyCookies from './pages/PrivacyCookies';
import Courses from './pages/Courses';
import Calculator from './pages/Calculator';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
      <Router>
      <Navbar />
      
      <Switch>
        <Route path='/Welcome' exact component={Welcome} />
        <Route path='/' exact component= {HomePage} />
        <Route path='/NewsEvents' exact component = {NewsEvents} />
        <Route path='/ContactUs' exact component = {ContactUs} />
        <Route path='/PrivacyCookies' exact component = {PrivacyCookies} />
        <Route path='/Courses' exact component={Courses} />
        <Route path='/Calculator' extends component={Calculator} />
      </Switch>
      </Router>
      
    </>
    </ThemeProvider>
  );
}

export default App;
