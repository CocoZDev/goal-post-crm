import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from "../../utils/API";

export class MapContainer extends Component {

  state = {
      customers: [],
  };

  componentWillMount() {
      this.selectedCheckboxes = new Set();
  }

  componentDidMount() {
      this.loadCustomers();
  }

  loadCustomers = () => {
      API.getAccounts({
          repRepId: localStorage.getItem('rep_id')
      })
      .then(res => {
          console.log(res.data);
          this.setState({ customers: res.data })
          
      }
      )
      .catch(err => console.log(err));
  };

  // THIS WILL CREATE MARKERS BY LOOPING THROUGH CUSTOMERS 
  // ONCE WE HAVE A CUSTOMERS.CUSTOMER_POSITION (LATLNG)
  // createMarker = customers => (
  //   <Marker
  //   name={customers.customer_state}
  //   key={customers.customer_company}
  //   />
  // )

  // createMarkers = () => (
  //   this.state.customers.map(this.createMarker)
  // )


render() {

    return (
      <Map google={this.props.google}
      style={{width: '100%', height: '100%', position: 'relative'}}
      className={'map'}
      zoom={14}>
      {/*{this.createMarkers()}*/}
      <Marker
      title={'The marker`s title will appear as a tooltip.'}
      name={'The Cookie Store'}
      position={{lat: 34.0522, lng: -118.2437}} />
      </Map>
    );
  
  }
}
  export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
  })(MapContainer)
