import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Footer from '../components/Footer';
import './Course.css';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function Courses() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
         <Container maxWidth="lg">
         <main>
         <Grid container spacing={1} style={{paddingTop:'20px', paddingBottom: '10px', justifySelf:"center" }} className='grid-header'>
          <h1> A-Z Courses</h1>
          <h3>While you are studying with us we aim to support your development and assist you in achieving your career ambitions.</h3>
            </Grid>
          <div className={classes.root}>
              <Grid container spacing={1}>
              <Grid container item xs={4} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
              <Box bgcolor='#31b7bc' color='#fff' p={2} className='course-box'>
                    <h3>Business and Professional </h3>
                        <ul className='course-list'>
                            <br />
                            <li>BSc (Hons) Accounting and Finance</li><br />
                            <li>FDSc Business Management</li><br />
                            <li>BSc (Hons) Business Management</li><br />
                            <li>FDA Digital Marketing and Communications</li><br />
                            <li>BA (Hons) Digital Marketing and Communications</li><br />
                        </ul>
              </Box>
              </Grid>
              <Grid container item xs={8} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', paddingLeft: '20px', justifyContent:"right"}}>
              <div className='course-text'><p>Any degree demonstrates your ability to think and work independently and you will develop important skills in communication, numeracy and information technology. 
                                            These are the qualities that many employers look for when recruiting.</p>
                                            <p>Whatever your reason for going on to Higher Education, we are sure to have a course that meets your needs. Maybe you want a university education qualification to build a new career, 
                                            or to move to that next step on an existing career path? Studying for a formal higher education qualification can increase your employability, your lifetime earnings and could help you find a fulfilling job.</p></div>
              </Grid>
            
          </Grid>
        </div>
        <div className={classes.root}>
         <Grid container spacing={1}>
        <Grid container item xs={4} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
        <Box bgcolor='#31b7bc' color='#fff' p={2} className='course-box'>
                    <h3>Social Sciences </h3>
                    <br />
                        <ul className='course-list'>
                            <li>BA (Hons) Criminology</li>
                            <br />
                            <li>BA (Hons) English Literature</li><br />
                            <li>BA (Hons) History and Archaeology</li><br />
                            <li>Diploma in Therapeutic Counselling</li><br />
                            <li>BA (Hons) Psychosocial studues</li><br />
                        </ul>
              </Box>
        </Grid>
        <br></br>
        <Grid container item xs={8} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', paddingLeft: '20px', justifyContent:"right"}}>
        <div className='course-text'> <p>When you have chosen a course to study at University Centre Peterborough, your next step is to make an application.   
                                      All full-time applications for UK and EU students must be made to UCAS via a web-based tracker system – www.ucas.com (the institution code for University Centre Peterborough is P56).
                                      All part-time applications can be directly to University Centre Peterborough. Contact the Admissions Office on 01733 214466 or email admissions@ucp.ac.uk to start your application.
                                      If you only wish to apply to University Centre Peterborough and already have the entry requirements, you can also apply directly to us by downloading and completing the following form.</p></div>
        </Grid>
    
      </Grid>
    </div>
    <div className={classes.root}>
         <Grid container spacing={1}>
        <Grid container item xs={4} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}}>
        <Box bgcolor='#31b7bc' color='#fff' p={2} className='course-box'>
                    <h3>Creative Industries </h3>
                    <br />
                        <ul className='course-list'>
                            <li>FDA Digital Arts</li>
                            <br />
                            <li>BA (Hons) Journalism</li>
                            <br />
                            <li>BA (Hons) Media Production</li>
                            <br />
                            <li>BA (Hons) Performing Arts</li>
                           
                        </ul>
              </Box>
        </Grid>
        <br></br>
        <Grid container item xs={8} spacing={1} style = {{paddingTop:'25px', paddingBottom: '10px', paddingLeft: '20px', justifyContent:"right"}}>
        <div className='course-text'> <p>Before you apply, please check that you meet the entry requirement which is listed on the course information pages.
                                        If you are unsure as to whether you fulfil the minimum entry criteria for your desired course, please do get in contact with us so that we can help you. 
                                        You can reach us on admissions@ucp.ac.uk or 01733 214466. In addition to your qualifications, we will also take into consideration any industry experience that you may have.
                                        Please be aware that submitting your application sooner rather than later helps to ensure that you have all of the resources in place for September that are essential for you to succeed with your studies.</p></div>
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
  