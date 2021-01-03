import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Footer from '../components/Footer';
import FinancePiggy from '../images/financepiggy.jpg';
import EventsCard from '../components/EventsCard';
import NewsCard from '../components/NewsCard';
import FaceMask from '../images/facemask.jpg';
import Loudspeaker from '../images/Loudspeaker.jpg';
import AdviceSession from '../images/advicesessions.jpg';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function Welcome() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
         <Container maxWidth="lg">
       <main>
        <Grid container spacing={5} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} >
          <h1> Events </h1>
          </Grid>
          <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
            <EventsCard
            image= {FinancePiggy}
            alt = "Finances"
            date = "Jan 12 2021"
            title="Parents Information Webinar - Student Finances"
            description = "Are you a student or parent wanting to know how student finances work?" />
            <div>&nbsp; &nbsp; &nbsp;</div>
            <EventsCard
            image= {AdviceSession}
            alt = "Advice Session"
            date = "Jan 14 2021"
            title="Virtual 1:1 Advice Sessions"
            description = "We are offering FREE virtual 1:1 advice sessions" /> 
            <div>&nbsp; &nbsp; &nbsp;</div>
            <EventsCard
            image= {FinancePiggy}
            alt = "Finances"
            date = "Feb 09 2021"
            title="Parents Information Webinar - Student Finances"
            description = "Are you a student or parent wanting to know how student finances work?" /> 
            
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} >
          <h1> News </h1>
          </Grid>
          <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
          <NewsCard  
            image= {FaceMask}
            alt = "Facemask"
            date = "24 Sep"
            title="Updated Covid-19 Guidelines"
            description = "Following the Prime Minister's address on 22 September 2020" />
            <div>&nbsp; &nbsp; &nbsp;</div>
            <NewsCard
            image= {Loudspeaker}
            alt = "Loudspeaker"
            date = "7 Sep"
            title="Induction 2020"
            description = "This information is for new students" /> 
            <div>&nbsp; &nbsp; &nbsp;</div>
            <NewsCard
             image= {Loudspeaker}
             alt = "Loudspeaker"
             date = "13 Aug"
             title="Apply for a degree through clearing"
             description = "You can apply through clearing if you've..." />  
            
          </Grid>


       </main>
        
      </Container>
      <div style = {{paddingTop:'50px'}}>
      <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" /> </div>
    </React.Fragment>
  );
}