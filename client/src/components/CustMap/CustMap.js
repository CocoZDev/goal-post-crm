import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import API from "../../utils/API";
import CustAPI from "../../utils/custAPI";

const coords = {
  lat: 34.0522,
  lng: -118.2437
};

const params = {v: '3.exp', key: 'AIzaSyBxWJpAb69GxwZixZHTWLqLOFlDqwbKHXw'};

class CustMap extends Component {

  state = {
      customers: []
  };
  
  componentDidMount() {
      this.loadCustomers();
  }

  loadCustomers = () => {
      API.getAccounts({
          repRepId: localStorage.getItem('rep_id')
      })
      .then(res => {
          console.log(res.data);
          this.setState({ customers: res.data})
      }
      )
      .catch(err => console.log(err));
  };

  createMarker = customers => (
    <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} 
       />
  )

  createMarkers = () => (
      this.state.customers.map(this.createMarker)
  )

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {this.createMarkers()}
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};


export default CustMap;
