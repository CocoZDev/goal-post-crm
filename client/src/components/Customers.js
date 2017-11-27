import React, { Component } from "react";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import { List, ListItem } from "./List";
import DeleteBtn from "./DeleteBtn";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";

class Customers extends Component {
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
      .then(res => this.setState({ customers: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        {/* Row #1 */}
        <Row fluid>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1><strong>Customers</strong></h1>
              <p>Quickly see all the customers you need to visit. </p>
            </Jumbotron>
          </Col>
        </Row>

          {/* Row #2 */}
          <Row fluid>
            {/* Vertical Menu */}
            <Col size="md-2 sm-2">
              <VerticalMenu />
            </Col>

          {/* Dashboard Content */}
            <Col size="md-10 sm-10">
              <div className='private text-center'>
              {this.state.customers.length ? (
                <List>
                  {this.state.customers.map(customer => (
                    <ListItem key={customer.customer_id}>
                      <a href={"/customer/" + customer.customer_id}>
                        <strong>
                          {customer.customer_company}
                          <br></br>
                          {customer.customer_contact}
                          <br></br>
                          {customer.customer_phone}
                          <br></br>
                          {customer.customer_email}
                        </strong>
                      </a>
                      {/* <DeleteBtn /> */}
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
              </div>
            </Col>
        </Row>
      </Container>
    )
  }};

export default Customers;
