import React, { Component } from 'react';
// import Navit from './Nav';
import logo from '../../data/logo.png';
import topdiagram from '../../data/topdiagram.png';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AboutUsCarousel from '../AboutUsCarousel';
// import Copyright from './Copyright';

const AboutUs = (props) => {
  const classes = useStyles();
  return (
    <div>
        {/* <Navit /> */}
        <AboutUsCarousel />
        {/* <img alt="logo" src='https://wallup.net/wp-content/uploads/2016/01/295008-car-sports_car-blue-road-desert-Acura_NSX.jpg'width={'100%'} /> */}
        <div style={{'width':'80%', margin:'auto'}}>
        <h2 style = {{textAlign:'center', 'color':'rgb(128, 223, 255)'}}>The Carmour Story</h2>
        <p style = {{textAlign:'left', 'color':'rgb(59, 100, 114)'}}>As vehicle technology evolves, the security measures put in place should as well. Cars can cost tens of thousands of dollars, and should offer more security than a ringing siren. This was the fundamental idea that motivated our team to create something new and innovative. We decided to build a system that constantly keeps the user updated with the status of their vehicle. This system performs constant check ups so the customer never has to!
</p>
<h2 style = {{textAlign:'center', 'color':'rgb(255, 153, 51)'}}>Our Goal</h2>
<img alt="logo" src={topdiagram} width={'100%'} />
<p style = {{textAlign:'left', 'color':'rgb(72, 43, 15)'}}>The Smart Car Security System will utilize several features to prevent theft and property damage. It integrates a video recording system, a solar powered battery, and a feature to notify the user when tampering has occurred with the vehicle. A web application will be integrated so that a user can preview a live stream of their vehicle from the comfort of their phone. </p>
<p style = {{textAlign:'left', 'color':'rgb(72, 43, 15)'}}>We all agree that would be very convenient and reassuring to be able to get live updates on what is going on with the car. We are excited about creating an affordable security system that provides users with safety and reassurance. We plan on making it universal so any vehicle can use this system. Having a modern car will not be able necessary. </p>
</div>
    {/* <Copyright /> */}
    </div>
    
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    
  },
  main: {
      display: 'inline-block',
      align: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'black'
  },
  head: {
      textAlign:'center'
  }
}));

export default AboutUs;