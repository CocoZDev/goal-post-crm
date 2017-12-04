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
    customer_contact: '',
    customer_company: '',
    customer_email: '', 
    customer_phone: '',
    customer_address: '',
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
    if (this.state.customer_contact && this.state.customer_company) {
      API.saveCusts({
        customer_contact: this.state.customer_contact,
        customer_company: this.state.customer_company,
        customer_email: this.state.customer_email, 
        customer_phone: this.state.customer_phone,
        customer_address: this.state.customer_address,
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
            <Col size="md-6 sm-6">
              <Input
                value={this.state.customer_contact}
                onChange={this.handleInputChange}
                name="customer_contact"
                placeholder="Contact Name *"
                required
              />
            </Col>
            <Col size="md-6 sm-6">
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
                placeholder="Customer Email"
              />
            </Col>
            <Col size="md-6 sm-6">
              <Input
                value={this.state.customer_phone}
                onChange={this.handleInputChange}
                name="customer_phone"
                placeholder="Phone Number"
              />
            </Col>
            <Col size="md-12 sm-12">
              <Input
                value={this.state.customer_address}
                onChange={this.handleInputChange}
                name="customer_address"
                placeholder="Address"
                required
              />
            </Col>
            <FormBtn
              disabled={!(this.state.customer_contact && this.state.customer_company)}
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
