import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import CustAPI from "../../utils/custAPI";
import PubSub from 'pubsub-js';
import Checkbox from '../../components/Checkbox';
import CustTable from '../../components/CustTable';


class CustSchedule extends Component {

    state = {
        customers: []
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
            console.log(res);
            this.setState({ customers: res.data })
        }
        )
        .catch(err => console.log(err));
    };

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
    
      createCheckbox = customers => (
        <Checkbox
                label={customers.customer_company}
                handleCheckboxChange={this.toggleCheckbox}
                key={customers.customer_company}
            />
      )
    
      createCheckboxes = () => (
          this.state.customers.map(this.createCheckbox)
      )

    handleChange = (customers) => {
        this.setState({ customers });
        console.log(`Selected: ${customers.label}`);
      }
    
    render() {
        return (
            <Container fluid>
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