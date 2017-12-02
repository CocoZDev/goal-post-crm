import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
// import CustAPI from "../../utils/custAPI";
import PubSub from 'pubsub-js';
import Checkbox from '../../components/Checkbox';

const customers = [
    'One', 
    'Two', 
    'Three',
];

class CustSchedule extends Component {
    componentWillMount() {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label =>{
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
      }
    
      createCheckbox = label => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
      )
    
      createCheckboxes = () => (
        customers.map(this.createCheckbox)
      )

    handleChange = (customers) => {
        this.setState({ customers });
        console.log(`Selected: ${customers.label}`);
      }
    
    render() {
        return (
            <Container fluid>
            {/* Customer Table */}
            {/* <Row fluid>
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
                                </ListItem>
                            ))}
                            </List>
                            ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </div>
                </Col>
            </Row> */}
            <Row fluid>
                <Col size="md-10 sm-10">
                    <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}

                    <button className="btn btn-default" type="submit">Route</button>
                    </form>
                </Col>
            </Row>   
            </Container>    
        );
    }
}

export default CustSchedule;