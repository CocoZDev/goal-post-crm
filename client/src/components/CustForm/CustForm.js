import React, { Component } from "react";
import "./CustForm.css";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/custAPI.js";


class Form extends Component {
  state = {
    customers: [],
    customer_contact: '',
    customer_company: '',
    customer_email: '', 
    customer_address: '',
    customer_phone: '',
    customer_rating:'',
    customer_notes: '',
    customer_visited:'',
    customer_active: ''
  };

  componentsDidMount() {
    this.loadCusts();
  }

  loadCusts = () => {
    API.getCusts()
    .then(res =>
    this.setState({ customers: res.data, customer_contact: "", 
    customer_company: "", customer_email: "", customer_address: "", customer_phone: "", customer_rating: "",
    customer_notes: "", customer_visited: "", customer_active: ""})
  )
  .catch(err => console.log(err));
  };

  deleteCust = id => {
    API.deleteCust(id)
    .then(res => this.loadCusts())
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //if (this.state.customer_contact && this.state.customer_company) {
      API.saveCust({
        customer_contact: this.state.customer_contact,
        customer_company: this.state.customer_company,
        customer_email: this.state.customer_email, 
        customer_address: this.state.customer_address,
        customer_phone: this.state.customer_phone,
        customer_rating: this.state.customer_rating,
        customer_notes: this.state.customer_notes,
        customer_visited: this.state.customer_visited,
        customer_active: this.state.customer_active,
        repRepId: localStorage.getItem('rep_id')
      })
      .then(res => this.loadCusts())
      .catch(err => console.log(err));
    //}
  };
  
  render () {
    return (
      <Container fluid>
      <Row>
        <Col size="md-6">
          <form>
            <Input
              value={this.state.customer_contact}
              onChange={this.handleInputChange}
              name="customer_contact"
              placeholder="Contact Name (required)"
            />
            <Input
              value={this.state.customer_company}
              onChange={this.handleInputChange}
              name="customer_company"
              placeholder="Company Name (required)"
            />
            <TextArea
              value={this.state.customer_email}
              onChange={this.handleInputChange}
              name="customer_email"
              placeholder="customer_email (required)"
            />
            <FormBtn
              disabled={!(this.state.customer_contact && this.state.customer_company)}
              onClick={this.handleFormSubmit}
            >
              Submit Customer
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6">
          {this.state.customers.length ? (
            <List>
              {this.state.customers.map(customer => {
                return (
                  <ListItem key={customer._id}>
                    <a href={"/customers/" + customer._id}>
                      <strong>
                        {customer.customer_contact} by {customer.customer_company}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteCust(customer._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}
}

export default Form;
