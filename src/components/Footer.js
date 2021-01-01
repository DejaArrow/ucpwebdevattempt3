import React from 'react'
import './Footer.css'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

function Footer(){
    return(
        <div className="Footer" >
            <p>University Center Peterborough</p>
            <p>Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom</p>
            <Copyright />
        </div>
    )
}
export default Footer