// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';
import Navit from './Nav';
import { Media } from 'reactstrap';
import kia from '../data/kia.PNG';
import { Container, Row, Col } from 'reactstrap';
import VideoPlayer from './VideoPlayer';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InfoIcon from '@material-ui/icons/Info';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LiveStream from './Livestream';
import './Styles.css';
import Copyright from './Copyright';



class VehicleLivestream extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    username: null,
    fullname: null,
    password: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

 
  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
        <div
      >
        <Navit />
       <h2 style = {{textAlign:'center', 'color':'rgb(128, 223, 255)'}}>Kia Optima</h2>
        <ul>
        <Container>
            <Row>
            
          {/* {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
                <li style={{ padding: '10px' }} key={data.message}>
                  <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                  <span style={{ color: 'gray' }}> phone number: </span>
                  {dat.message}
                  <span style={{ color: 'gray' }}> username: </span>
                  {dat.username}
                  <span style={{ color: 'gray' }}> Full Name: </span>
                  {dat.fullname}
                </li>
              ))} */}
              <Media>
                  <Col xs="12">
      <Media left href="/Vehicles/Optima">
        <Media object width="100%"   src={kia} alt="Generic placeholder image" />
      </Media>
      </Col>
      {/* <Media href="/Vehicles/Optima" body>
        <Media heading>
        
        </Media>
              Online
      </Media> */}
    </Media>
    </Row>
    <Row>
    <Col sm={{ size: 12}} md={{ size: 4, offset: 5 }}>
        <LiveStream/>
        </Col>
    </Row>
    
    <Row>
    
    <Col md = "4" xs="12">
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><InfoIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Info" />
        </ListItemLink>
        </List>
    </Col>
    <Col md = "4" xs="12">
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="/Vehicles/Optima/Location">
        <ListItemIcon><LocationOnIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Location" />
        </ListItemLink>
        </List>
      </Col>
      <Col md = "4" xs="12">
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><AddIcCallIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Notification Settings" />
        </ListItemLink>
        </List>
    </Col>
    
      </Row>
      <Row>
    
    <Col md = "4" xs="12">
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><BatteryUnknownIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Battery Level" />
        </ListItemLink>
        </List>
    </Col>
    <Col md = "4" xs="12">
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><VideoLibraryIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Recorded Videos" />
        </ListItemLink>
        </List>
      </Col>
      <Col md = "4" xs="12">
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="https://www.linkedin.com/in/paul-valenzuela-511b28187/">
        <ListItemIcon><NotificationsOffIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Silence Device" />
        </ListItemLink>
        </List>
    </Col>
    
      </Row>
    </Container>
        </ul>
        <Copyright />
     </div>
    );
  }
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }


export default VehicleLivestream;