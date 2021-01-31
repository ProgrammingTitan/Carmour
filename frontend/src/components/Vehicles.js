// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';
import Navit from './Nav';
import { Media } from 'reactstrap';
import kia from '../data/kia.PNG';
import { Container, Row, Col } from 'reactstrap';

class Vehicles extends Component {
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
      <div>
        <Navit />
       <h2 style = {{textAlign:'center', 'color':'rgb(128, 223, 255)'}}>My Vehicles</h2>
        <ul>
        <Container>
            <Row>
              <Media>
                  <Col xs="6">
      <Media left href="/Vehicles/Optima">
        <Media object width="100%"   src={kia} alt="Generic placeholder image" />
      </Media>
      </Col>
      <Media href="/Vehicles/Optima" body>
        <Media heading>
          <span style={{'color': 'rgb(255, 153, 51)'}}>
          Kia Optima
          </span>
        </Media>
        <span style={{'color': 'rgb(255, 153, 51)'}}>
          Online
          </span>
      </Media>
    </Media>
    </Row>
    </Container>
        </ul>
        
      </div>
    );
  }
}

export default Vehicles;