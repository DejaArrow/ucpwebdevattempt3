import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Footer from '../components/Footer';
import './Welcome.css';
import LectureTheatre from '../images/lecturetheatre.jpg';

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
          
          
          <h1 className='welcome-header'> Welcome to UCP</h1>
          <main>

          <h2>While you are studying with us we aim to support your development and assist you in achieving your career ambitions.</h2>

          <div className={classes.root}>
              <Grid container spacing={1}>
              <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
              <div><img src={LectureTheatre} className='lecture-theatre' alt='Image of Lecture theatre' /></div>
              </Grid>
              <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
              <div className='welcome-text'>We very much care about you as individuals and one of our key objectives is to ensure we listen
                 to your views and continuously develop our provision so that your needs are met. 
                 The University Centre offers a broad portfolio of courses covering a range of subject areas and we are rapidly developing specialisms in a number of key areas.</div>
              </Grid>
            
          </Grid>
        </div>
        <div className={classes.root}>
         <Grid container spacing={1}>
        <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
          <div className='welcome-text'> Our portfolio is constantly being revised and updated to take account of the emerging needs and aspirations of local, national and international markets. 
            Since opening our purpose built £10 million campus in the heart of Peterborough, we have grown our portfolio of courses to reflect the needs of students and local, national and international employers.  
            This has led to genuine employment opportunities for our graduates in their chosen career path as well as opportunities to build academic skills necessary for post-graduate study. </div>
        </Grid>
        <br></br>
        <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', paddingLeft: '20px', justifyContent:"center"}}>
        <div className='welcome-text'> University Centre Peterborough (UCP) was established in 2007 and was a joint venture between Anglia Ruskin University (ARU) and Peterborough College. 
            We have now become an approved partner of ARU and a wholly owned subsidiary of the Inspire Education Group from 1st August 2020. ARU accredits our undergraduate degree courses at the Peterborough campus. 
            Higher National provision accredited by Pearson is delivered at both the Peterborough and Stamford campuses. UCP at Stamford also has a range of teaching and education courses accredited by Bishop Grosseteste University. </div>
        </Grid>
    
      </Grid>
    </div>
    

            </main>         
        </Container>
        <div> </div>
        <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" />
      </React.Fragment>
    );
  }
  