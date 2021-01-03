import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
       <Container maxWidth="lg">
           

        <main>         
          <img src ={HomePageBanner} alt ="Open Day" height = "100%" width = "100%" />
          <div>
            <div></div>
                   
          <Grid container spacing={5} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '10px', justifyContent:"center"}} >
          <div className = "h1"> In The News</div>
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
          <div className = "readMore"> <Link to='/NewsEvents'>Read More News... </Link></div>

          <Grid container spacing={4}>
          
          <Carousel
          initialSlideHeight = "300px" 
          style = {{paddingTop:'50px', paddingBottom:'50px'}}>
          <img src={RetroGaming} height = "300px" width = "80%" alt ="Slide1"/>
          <img src={GraduationImage} height = "300px" alt ="Slide2"/>
          <img src={LectureTheatre} height = "300px" alt ="Slide3"/>
          <img src={Students} height = "300px" alt ="Slide4"/>
          <img src={AdviceSession} height = "300px" alt ="Slide5"/>
          <img src={UCPComputing} height = "300px" alt ="Slide6"/>
          </Carousel>
          </Grid>
          </div>
        </main>
        
      </Container>
      <div style = {{paddingTop:'50px'}}>
      <Footer  style = {{paddingTop:'50px'}} title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" /> </div>
    </React.Fragment>
  );
}