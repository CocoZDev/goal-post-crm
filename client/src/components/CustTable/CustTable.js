import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import CustAPI from "../../utils/custAPI";
import PubSub from 'pubsub-js';
import DeleteBtn from "../../components/DeleteBtn";
import "./CustTable.css";

class CustTable extends Component {
    state = {
        customers: []
    };

    componentWillMount() {
        this.token = PubSub.subscribe('UPDATE_LIST',this.loadCustomers.bind(this));
    }
    componentDidMount() {
        this.loadCustomers();
        PubSub.publish('UPDATE_LIST', this.token)
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
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

    deleteCust = id => {
        CustAPI.deleteCust(id)
          .then(res => this.loadCustomers())
          .catch(err => console.log(err));
      };
    
    render() {
        return (
            <Container fluid>
            {/* Customer Table */}
            <Row fluid>
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
                                {customer.customer_firstname}
                                <br></br>
                                {customer.customer_lastname}
                                <br></br>
                                {customer.customer_phone}
                                <br></br>
                                {customer.customer_email}
                                </strong>
                            </a>
                            <DeleteBtn onClick={() => this.deleteCust(customer.customer_id)} />
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
        );
    }
}

export default CustTable