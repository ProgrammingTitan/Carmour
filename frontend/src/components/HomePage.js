import React, { Component } from 'react';
import AlertUser from '../AlertUser';
import { Spinner, Jumbotron, Button } from 'reactstrap';
import Navit from './Nav';
import VideoPlayer from './VideoPlayer';
import logo from '../data/logo.png';
import Copyright from './Copyright';

const car = 'url(\'http://www.allwhitebackground.com/images/3/3887.jpg\')'
const HomePage = (props) => {
  return (
    <div>
        {/* <Navit /> */}
      {/* <Spinner color="primary" /> */}
      <Jumbotron style={{'background-image':'url(\'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1560/tembnkufjurrwrbxqce8\')','min-height':'540px','color':'orange','background-repeat':'no-repeat','background-position':'center','background-size':'cover'}}>
        <h1 className="display-4">The Next Generation of Car Security</h1>
        <p className="lead">Learn how you can keep your vehicles safe with this inexpensive and modern solution!</p>
        <Button color="warning">Shop Now</Button>{' '}
      </Jumbotron>
      <Jumbotron style={{'background-image':'url(\'https://i.ytimg.com/vi/qT6deCdsF6Q/maxresdefault.jpg\')','height':'200px','color':'white','background-repeat':'no-repeat','background-position':'center','background-size':'cover'}}>
        <h4 className="display-6">Set Up Your Device</h4>
        <p className="lead">Already purchased our product? Set Up Your Device Here</p>
        <Button color="primary">Set Up</Button>{' '}
      </Jumbotron>
      
      {/* <VideoPlayer /> */}
      {/* <AlertUser /> */}
      <Copyright />
    </div>
  );
}


export default HomePage;