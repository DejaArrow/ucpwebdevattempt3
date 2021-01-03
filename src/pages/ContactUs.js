import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import './ContactUs.css'
import Form from '../components/contactForm/Form';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function ContactUs() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
         <Container maxWidth="lg">
       <main>
        <Grid container spacing={5} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} >
          <h1> Contact Us </h1>
          </Grid>
          <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
          <Grid container item xs={6} spacing={1} style = {{paddingTop:'0px', paddingBottom: '10px', justifyContent:"left"}}><div className='contact-form'>
            <Form />
            </div>
            </Grid>
            
          
          <Grid container item xs={6} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}><div className='contact-info'>
              Phone
              <br />
              01733 214466
              <br /><br />
              University Centre Peterborough<br />
              Park Crescent Campus<br />
              Peterborough, Cambridgeshire<br />
              PE1 4DZ
              
            </div>
            </Grid>
          </Grid>

          


       </main>
        
      </Container>
      <div style = {{paddingTop:'50px'}}>
      <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" /> </div>
    </React.Fragment>
  );
}