import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import API from "../utils/salesAPI.js";
import DeleteBtn from "./DeleteBtn";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input, TextArea, FormBtn } from "./Form";
import VerticalMenu from "./VerticalMenu";

class Sales extends Component {
    state = {
        sales: []
    };

    componentDidMount() {
        this.loadSales();
    }

    loadSales = () => {
        console.log("loadSales..Sales.js");
        API.getSales({
            repRepId: localStorage.getItem('rep_id')
        })
        .then(res => {
            console.log("response to loadSales..Sales.js");
            console.log(res);
            this.setState({ sales: res.data })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
                <Row>
                    <Col size="md-12 sm-12">
                        {this.state.sales.length ? (
                            <List>
                                {this.state.sales.map(sale => (
                                    <ListItem key={sale.sale_id}>
                                        <a href={"/sale/" + sale.sale_id}>
                                            <strong>
                                                {/* {sale.sale_id} */}
                                                {sale.sale_product}
                                                {sale.sale_customer}
                                                {sale.sale_quantity}
                                                {sale.sale_purchasePrice}
                                                {sale.sale_note}
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
        );
    }
}

export default Sales;