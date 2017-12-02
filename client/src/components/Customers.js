import React from "react";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import VerticalMenu from "./VerticalMenu";
import CustTable from "./CustTable";
import CustForm from "./CustForm";

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
      <div>
          {/* Row #1 */}
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1><strong>Customers</strong></h1>
              <p>Quickly see all the customers you need to visit. </p>
            </Jumbotron>
          </Col>
        </Row>

        {/* Row #2 */}
        <Row>
        <div className='private text-center'>
          <Col size="md-12 sm-12">
            <CustForm />
          </Col>
        </div>       
        </Row> 

        <Row>
          {/* Customers Content */}
            <Col size="md-12 sm-12">
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

      </div>
    )
  }};

export default Customers;
