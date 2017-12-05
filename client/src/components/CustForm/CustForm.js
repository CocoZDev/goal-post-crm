import React, { Component } from "react";
import "../Form/DataForm.css";
import DeleteBtn from "../../components/DeleteBtn";		
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";		
import API from "../../utils/custAPI.js";
import PubSub from 'pubsub-js';


class CustForm extends Component {
  state = {
    customers: [],
    // customer_contact: {
      customer_firstname: '',
      customer_lastname: '',
    // },
    customer_company: '',
    customer_email: '', 
    customer_phone: '',
    // customer_address: {
      customer_street: '',
      customer_city: '',
      customer_state: '',
      customer_zipcode: '',
    // },
    customer_rating:'',
    customer_notes: '',
    customer_visited:'',
    customer_active: ''
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.customer_firstname && this.state.customer_lastname && this.state.customer_company) {
      API.saveCusts({
        // customer_contact: {
          customer_firstname: this.state.customer_firstname,
          customer_lastname: this.state.customer_lastname,
        // },
        customer_company: this.state.customer_company,
        customer_email: this.state.customer_email, 
        customer_phone: this.state.customer_phone,
        // customer_address: {
          customer_street: this.state.customer_street,
          customer_city: this.state.customer_city,
          customer_state: this.state.customer_state,
          customer_zipcode: this.state.customer_zipcode,
        // },
        // customer_rating: this.state.customer_rating,
        customer_notes: this.state.customer_notes,
        customer_visited: this.state.customer_visited,
        // customer_active: this.state.customer_active,
        repRepId: localStorage.getItem('rep_id')
      })
      .then(res => {
          console.log("res from post..CustForm", res)
          PubSub.publish('UPDATE_LIST', 'update Now!');
        })
      .catch(err => console.log(err));
    }
    
  };
  
  render () {
    return (
      <Row>
        <Col size="md-12 sm-12">
          <form className="form-form-horizontal DataForm">
            <h2>Enter customer information below:</h2>
            <Col size="md-4 sm-4">
              <Input
                value={this.state.customer_firstname}
                onChange={this.handleInputChange}
                name="customer_firstname"
                placeholder="First Name *"
                required
              />
            </Col>
            <Col size="md-4 sm-4">
              <Input
                value={this.state.customer_lastname}
                onChange={this.handleInputChange}
                name="customer_lastname"
                placeholder="Last Name *"
                required
              />
            </Col>
            <Col size="md-4 sm-4">
              <Input
                value={this.state.customer_company}
                onChange={this.handleInputChange}
                name="customer_company"
                placeholder="Company Name *"
                required
              />
            </Col>
            <Col size="md-6 sm-6">
              <Input
                value={this.state.customer_email}
                onChange={this.handleInputChange}
                name="customer_email"
                placeholder="Email Address"
              />
            </Col>
            <Col size="md-6 sm-6">
              <Input
                value={this.state.customer_phone}
                onChange={this.handleInputChange}
                name="customer_phone"
                placeholder="Phone Number i.e. +1 123-456-7890"
              />
            </Col>
            <Col size="md-12 sm-12">
              <Input
                value={this.state.customer_street}
                onChange={this.handleInputChange}
                name="customer_street"
                placeholder="Street"
              />
            </Col>
            <Col size="md-4 sm-4">
              <Input
                value={this.state.customer_city}
                onChange={this.handleInputChange}
                name="customer_city"
                placeholder="City"
              />
            </Col>
            <Col size="md-4 sm-4">
              <Input
                value={this.state.customer_state}
                onChange={this.handleInputChange}
                name="customer_state"
                placeholder="State (i.e. CA)"
              />
            </Col>
            <Col size="md-4 sm-4">
              <Input
                value={this.state.customer_zipcode}
                onChange={this.handleInputChange}
                name="customer_zipcode"
                placeholder="Zip Code"
              />
            </Col>
            <FormBtn
              disabled={!(this.state.customer_firstname && this.state.customer_lastname && this.state.customer_lastname)}
              onClick={this.handleFormSubmit}
            >
              Add to Database
            </FormBtn>
          </form>
        </Col>
      </Row>
  );
}
}

export default CustForm;
