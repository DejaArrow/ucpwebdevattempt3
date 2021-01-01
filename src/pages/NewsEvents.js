import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './HomePage.css';
import Footer from '../components/Footer';
import HomePageBanner from '../images/homepageopendaybanner.jpg';
import Carousel from 'nuka-carousel';
import GraduationImage from '../images/graduation.jpg';
import LectureTheatre from '../images/lecturetheatre.jpg';
import Students from '../images/students.png';
import AdviceSession from '../images/advicesessions.jpg';
import UCPComputing from '../images/UCPComputing1.jpg';
import RetroGaming from '../images/RetroGaming.jpg';
import NewsCard from '../components/NewsCard';
import FaceMask from '../images/facemask.jpg';
import Loudspeaker from '../images/Loudspeaker.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function NewsEvents() {
  const classes = useStyles();

  return (
    <React.Fragment>
       <Container maxWidth="lg">
       <main>
       <Grid container spacing={5} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} >
          <div className = "h1"> Events </div>
          </Grid>


       </main>
        
      </Container>
      <div style = {{paddingTop:'50px'}}>
      <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" /> </div>
    </React.Fragment>
  );
}