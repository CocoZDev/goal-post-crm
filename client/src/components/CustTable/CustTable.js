import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import CustAPI from "../../utils/custAPI";
import PubSub from 'pubsub-js';
import DeleteBtn from "../../components/DeleteBtn";
import { TableContainerCust, TableRow} from "../Table";
import "../Table/Table.css";

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
            <div>
            <Row>
                <Col size="md-12 sm-12">
                    <div className='private text-center customer-table'>
                        {this.state.customers.length ? (
                       <TableContainerCust>
                        {this.state.customers.map(customer => (
                            <TableRow key={customer.customer_id}>
                                <td className="col-md-1">{customer.customer_id}</td>
                                <td className="col-md-1">{customer.customer_firstname}</td>
                                <td className="col-md-1">{customer.customer_lastname}</td>
                                <td className="col-md-2">{customer.customer_company}</td>
                                <td className="col-md-1">{customer.customer_phone}</td>
                                <td className="col-md-1">{customer.customer_email}</td>
                                <td className="col-md-2">{customer.customer_street}</td>
                                <td className="col-md-1">{customer.customer_city}</td>
                                <td className="col-md-1">{customer.customer_state}</td>
                                <td className="col-md-1">{customer.customer_zipcode}</td>

                                </TableRow>
                                ))}
                                </TableContainerCust>
                                ) : (
                            <h3>No Results to Display</h3>
                            )}
                    </div>
                </Col>
            </Row>
            </div>

        );
    }
}

export default CustTable;