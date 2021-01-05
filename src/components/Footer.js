import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { FooterItems } from "./FooterItems";


function Copyright() {
  return (
      <Typography variant="body2" color="#fff" align="center">
      {'Copyright © '}
      <Link  className ="CopyrightLink" color= 'white' href="#">
        University Center Peterborough
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Footer extends Component {
  state = { clicked: false }

 

  render() {
    return(
      <div className="Footer">
      <Grid container spacing={1}>
        <Grid container item xs={4} spacing={1} style = {{paddingTop:'25px', paddingLeft: '25px', paddingBottom: '10px', justifyContent:"center"}}>
              <div className ='links-col'>
                <h3 className='footer-h3'> Helpful QuickLinks</h3> 
                <ul className="footer-list">
                    {FooterItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                   </ul>           
            
          </div>
          </Grid>
        <Grid container item xs={4} spacing={1} style = {{paddingTop:'25px', paddingLeft: '25px', paddingBottom: '10px', justifyContent:"center"}}>
           
                  <div className='address-col'>
                    <h3 className='footer-h3'>University Center Peterborough</h3>
                    <ul className='address-list'>
                      <li>Park Crescent Campus</li>
                      <li>Peterborough</li>
                      <li>Cambridgeshire</li>
                      <li>PE1 4DZ</li>
                      <li>United Kingdom</li>
                      </ul>
                  </div>
        </Grid>
        <Grid container item xs={4} spacing={1} style = {{paddingTop:'25px', paddingLeft: '25px', paddingBottom: '10px', justifyContent:"center"}}>
          <div className ='social-col'>
                <h3 className='footer-h3'>Connect with Us</h3>
                <ul className='social-list'>
                  <li><SocialIcon url="https://www.facebook.com/ucpeterborough" bgColor="#fff" target="_blank"/> &nbsp; <SocialIcon url="https://twitter.com/ucpeterborough" bgColor="#fff" target="_blank" /> </li>
                  &nbsp;
                  <li><SocialIcon url="https://www.linkedin.com/company/university-centre-peterborough/" bgColor="#fff" target="_blank"/> &nbsp; <SocialIcon url="https://www.youtube.com/channel/UCMGvV-0uiAtsnXLWOu7IfOA" bgColor="#fff" target="_blank" /> &nbsp;  <SocialIcon url="mailto:hello@ucp.ac.uk" network="email" bgColor="#fff"target="_blank" /> </li>
                  
                </ul>
          </div>
          </Grid>
       
        </Grid>
        <div className='copyright'>
            <Copyright />
            </div>
      </div>
    )
}
}
export default Footer