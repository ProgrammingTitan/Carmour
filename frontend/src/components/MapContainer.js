import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers : [ {lat: this.props.carlat,lng: this.props.carlng, name: 'Kia Optima'}]
  };

  

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.state.markers);
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        style={
          {height: '100%'},
          {width: '50%'}
        }
      
        initialCenter= {
          this.state.markers["0"]
        }
      >
        {/* <Marker onClick={this.onMarkerClick} name={'current location'} /> */}
        {this.state.markers.map((marker, index) => (
        <Marker
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={this.onMarkerClick} name={marker.name}
      />
    ))}
        <Marker
      position={{ lat: this.state.markers.lat, lng: this.state.markers.lng }}
    />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY 
})(MapContainer);
