import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import API from "../../utils/API";

const customer_address = {
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
        console.log(res);
        this.setState({ customers: res.data })
      }
      )

      .catch(err => console.log(err));
  };



  // createMarker = customer_address => (
  //   <Marker
  //         lat={customer_address.lat}
  //         lng={customer_address.lng}
  //         draggable={true}
  //         onDragEnd={this.onDragEnd} 
  //      />
  // )

  // createMarkers = () => (
  //     this.state.customer_address.map(this.createMarker)
  // )

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
        lat={customer_address.lat}
        lng={customer_address.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
       
        <InfoWindow
          lat={customer_address.lat}
          lng={customer_address.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={customer_address.lat}
          lng={customer_address.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};


export default CustMap;
