import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import './CookiesPrivacy.css'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function CookiesPrivacy() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
         <Container maxWidth="lg">
              <main>
                <Grid container spacing={5} className='privacy' style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} >  
                <div className={classes.root}>
                        <h2 className='privacy-headings'>Privacy Statement</h2>
                        <p> University Centre Peterborough (UCP) is a wholly owned subsidiary of The Inspire Education Group (IEG) and as such we are bound by their data protection policies and procedures. We will use your data, including photographical images,
                        for the purpose of education and for statistical, administrative and communication relating to enquiry, application course and alumni.  
                        UCP has an agreement with IEG to deliver and administer your programme of study and we will therefore share your data with IEG and validating / awarding bodies for this purpose as well as designated financial, 
                        government and statistical agencies seeking to assess your satisfaction and employment post-graduation. We will not disclose your data to any other third parties with the exception of the above, where we are otherwise required by law or where you have given your consent in advance. 
                        A copy of the Data Protection policies we are bound by are available on our website.</p>
                    </div>
                </Grid>
                <Grid container spacing={5} className='privacy' style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} > 
                <div className={classes.root}>
                        <h2 className='privacy-headings'>Personal Data </h2>
                        <p> We are committed to protecting your personal information when you use our services and want to be clear about the data we collect and process. We have created this Corporate Privacy Notice to reflect the high standards established with the new
                            EU General Data Protection Regulation (GDPR) which covers how we collect, use, disclose, transfer and store your data. It is intended to be read by applicants, staff, students, alumni, as well as visitors that use our services.
                            As a student at UCP studying an undergraduate or postgraduate qualification through one of our accredited awarding bodies we may collect data about you inline with the Privacy Policy of IEG which can be found here. </p>
                    </div>
                </Grid>
                <Grid container spacing={5} className='privacy' style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} > 
                <div className={classes.root}>
                        <h2 className='privacy-headings'>How long do we keep your personal data?</h2>
                        <p> Your personal data will be held confidentially for as long as necessary to fulfil the purposes for which it was it collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. 
                        We retain personal data collected from applicants, students and alumni in accordance with our Records Retention Schedule. In general terms most student data it is retained for 6 years after your last engagement with us but some personal data may be
                        kept for longer so that we can verify your award if you apply for a job, or apply for another course of study. </p>
                    </div>
                </Grid>
                <Grid container spacing={5} className='privacy' style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} > 
                <div className={classes.root}>
                        <h2 className='privacy-headings'>HESA Student Collection Notice</h2>
                        <p>The Higher Education Statistics Agency (HESA) is the official Government agency for the collection, analysis and dissemination of quantitative information about higher education in the UK. Like other Higher Education Institutions (HEIs), 
                            the University Centre Peterborough has a statutory duty to pass certain personal data on current and former students to HESA.
                            The University also supplies HESA with contact details of recent graduates, for use in the Graduate Outcomes survey. The following data collection notices have been produced by HESA for HEIs, explaining the purposes for which the data is gathered and the ways in which these are used.
                            The Statement is updated annually and can be found at, https://www.hesa.ac.uk/about/regulation/data-protection/notices
                            Note: Reference in this notice to 'we' and 'us' refers to the higher education provider which you attend/attended (i.e. the University Centre Peterborough). </p>
                    </div>
                </Grid>
                </main>
      
        </Container>
        <div style = {{paddingTop:'50px'}}>
        <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" /> </div>
      </React.Fragment>
    );
  }

