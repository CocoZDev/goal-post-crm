import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import DeleteBtn from "./DeleteBtn";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, TextArea, FormBtn } from "./Form";

class Customers2 extends Component {
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
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Customer List</h1>
                        </Jumbotron>
                        {/* <form>
                            <Input name="title" placeholder="Title (required)" />
                            <Input name="author" placeholder="Author (required)" />
                            <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                            <FormBtn>Submit Book</FormBtn>
                        </form> */}
                    </Col>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Customer List</h1>
                        </Jumbotron>
                        {this.state.customers.length ? (
                            <List>
                                {this.state.customers.map(customer => (
                                    <ListItem key={customer.customer_id}>
                                        <a href={"/customer/" + customer.customer_id}>
                                            <strong>
                                                {customer.customer_company}
                                                {customer.customer_contact}
                                            </strong>
                                        </a>
                                        <DeleteBtn />
                                    </ListItem>
                                ))}
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

export default Customers2;