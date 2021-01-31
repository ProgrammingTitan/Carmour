import React, {useState,useEffect, Component } from 'react';
import Axios from 'axios';
// import Navit from './Nav';
import { Media } from 'reactstrap';
import kia from '../../data/kia.PNG';
import mercedes from '../../data/mercedes.png';
import jeep from '../../data/jeep.png';
import { Container, Row, Col } from 'reactstrap';
// import VideoPlayer from './VideoPlayer';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ListItemLink from '@material-ui/core/ListItemLink';
// import ContactMailIcon from '@material-ui/icons/ContactMail';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InfoIcon from '@material-ui/icons/Info';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LiveStream from '../Livestream';
import '../Styles.css';
import MapContainer from '../MapContainer';
// import Copyright from './Copyright';
import './VehiclePage.css';
import axios from 'axios';
import { Spinner } from 'reactstrap';

const PORT = process.env.PORT || 'http://localhost:5000' ;

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function VehiclePage(props) {

    const [infoModal, setInfoModal] = useState(false);
    const [notificationModal, setNotificationModal] = useState(false);
    const [locationModal, setLocationModal] = useState(false);
    const [batteryModal, setBatteryModal] = useState(false);
    const [videoModal, setVideoModal] = useState(false);

    const vehicleID = props.match.match.params.id;

    const infoToggle = () => setInfoModal(!infoModal);
    const notificationToggle = () => setNotificationModal(!notificationModal);
    const locationToggle = () => setLocationModal(!locationModal);
    const batteryToggle = () => setBatteryModal(!batteryModal);
    const videoToggle = () => setVideoModal(!videoModal);

    const [carData, setCarData] = useState({
      vehicle: {},
      number: '',
      gotData: false
  })

    const [phoneData, setPhoneData] = useState({
    number: '',
})

  useEffect(() => {
    const url = `${PORT}/api/vehicles/${vehicleID}`;
    let token = localStorage.getItem("auth-token");

    axios.get(url, {
      headers: {
        "x-auth-token" : token,
    }})
    .then((res) =>{
      setCarData({
        vehicle: res.data,
        gotData: true
      })

      console.log(res.data);
    })

    Axios.get(`${PORT}/api/users/`,{
      headers:{
        "x-auth-token" : token
      }
    }) 
    .then((res) => {
      setPhoneData({
        number: res.data.phoneNumber,
      })
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
  });
}, []);


    const alarmText = async (e) => {
      try{
       

        const newNumber = {
          message: phoneData.number
        }
        await Axios.post(
          `${PORT}/api/texts/sendAlert`, newNumber
      
      );
      }catch (err) {
        console.log(err);
    }

    }
    return (
        <div>
          {carData.gotData ?
             <div>
       <h2 style = {{textAlign:'center', 'color':'rgba( 24,183,241, 1)'}}>{carData.vehicle.brand} {carData.vehicle.model}</h2>
        <ul>
        <Container>
            <Row>
            
              <Media>
                  <Col xs="12">
      <Media left>
        <Media object width="100%"   src={(carData.vehicle.brand === "Kia") ? kia :(carData.vehicle.brand === "Mercedes") ? mercedes : jeep} alt="Generic placeholder image" />
      </Media>
      </Col>
     
    </Media>
    </Row>
    <Row>
    <Col sm={{ size: 12}} md={{ size: 4, offset: 5 }}>
        <LiveStream/>
        </Col>
    </Row>
    
    <Row>
    
    <Col md = "4" xs="12">
    <List onClick={infoToggle} component="nav" aria-label="secondary mailbox folders">
        <ListItemLink>
        <ListItemIcon><InfoIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText  primary="Info" />
        </ListItemLink>
        </List>
        <Modal isOpen={infoModal} toggle={infoToggle} >
        <ModalHeader toggle={infoToggle}>Car Information</ModalHeader>
        <ModalBody>
            {carData.vehicle.brand} {carData.vehicle.model} {carData.vehicle.year}
            <p>This sytem has saved {carData.vehicle.previousFeed.length} clips.</p>
            <p>Lattitude: {carData.vehicle.lat} N</p>
            <p>Longtude: {carData.vehicle.lng} E</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: 'rgba( 24,183,241, 1)'}} onClick={infoToggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </Col>
    <Col md = "4" xs="12">
    <List onClick={locationToggle} component="nav" aria-label="secondary mailbox folders">
        <ListItemLink>
        <ListItemIcon><LocationOnIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText  primary="Location" />
        </ListItemLink>
        </List>
        <Modal isOpen={locationModal} toggle={locationToggle} >
        <ModalHeader toggle={locationToggle}>Location</ModalHeader>
        <ModalBody className="google-map-container">
            <MapContainer 
              carlat = {carData.vehicle.lat} 
              carlng ={carData.vehicle.lng}
            />
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: 'rgba( 24,183,241, 1)'}} onClick={locationToggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
      </Col>
      <Col md = "4" xs="12">
      <List onClick={notificationToggle} component="nav" aria-label="secondary mailbox folders">
        <ListItemLink>
        <ListItemIcon><AddIcCallIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText  primary="Notification Settings" />
        </ListItemLink>
        </List>
        <Modal isOpen={notificationModal} toggle={notificationToggle} >
        <ModalHeader toggle={notificationToggle}>Notification Settings</ModalHeader>
        <ModalBody>
            Registered Phone Number: {phoneData.number}
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: 'rgba( 24,183,241, 1)'}} onClick={notificationToggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </Col>
    
      </Row>
      <Row>
    
    <Col md = "4" xs="12">
    <List onClick={batteryToggle} component="nav" aria-label="secondary mailbox folders">
        <ListItemLink>
        <ListItemIcon><BatteryUnknownIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Battery Level" />
        </ListItemLink>
        </List>
        <Modal isOpen={batteryModal} toggle={batteryToggle} >
        <ModalHeader toggle={batteryToggle}>Battery Level</ModalHeader>
        <ModalBody>
           Undefined
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: 'rgba( 24,183,241, 1)'}} onClick={infoToggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </Col>
    <Col md = "4" xs="12">
    <List onClick={videoToggle} component="nav" aria-label="secondary mailbox folders">
        <ListItemLink>
        <ListItemIcon><VideoLibraryIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText primary="Recorded Videos" />
        </ListItemLink>
        </List>
        <Modal isOpen={videoModal} toggle={videoToggle} >
        <ModalHeader toggle={videoToggle}>Recorded Footage</ModalHeader>
        <ModalBody >
         {
           carData.vehicle.previousFeed.map((video,key) =>
            <>
            <h4>{video.date}</h4>
            <iframe width="100%" height="auto"
src={video.src}>
</iframe>
            </>
           )
         }
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: 'rgba( 24,183,241, 1)'}} onClick={videoToggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
      </Col>
      <Col md = "4" xs="12">
      <List onClick={alarmText} component="nav" aria-label="secondary mailbox folders">
        <ListItemLink>
        <ListItemIcon><NotificationsOffIcon style={{ color: 'black' }} /></ListItemIcon>
          <ListItemText  primary="Test Notification" />
        </ListItemLink>
        </List>
    </Col>
    
      </Row>
    </Container>
        </ul>
     </div>
     :
     <Spinner color="warning" />
          }
        </div>
    )
}
