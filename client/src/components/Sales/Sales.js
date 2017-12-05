import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/salesAPI.js";
import Jumbotron from "../Jumbotron";
import "../Form/DataForm.css";
import PubSub from 'pubsub-js';

class Sales extends Component {
  state = {
    sales: []
  }; 

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveSale({
      sale_customer: this.state.sale_customer,
      sale_product: this.state.sale_product,
      sale_quantity: this.state.sale_quantity,
      sale_purchasePrice: this.state.sale_purchasePrice,
      sale_note: this.state.sale_note,
      repRepId: localStorage.getItem('rep_id')
    })
    .then(res => {
      console.log('loadSales.sales.js', res);
      // PubSub.Publish('UPDATE_LIST', 'update Now!');
    })
    .catch(err => console.log(err));
  };

  componentWillMount() {
    this.token = PubSub.subscribe('UPDATE_LIST', this.loadSales.bind(this));
  }

  componentDidMount() {
    this.loadSales();
    PubSub.publish('UPDATE_LIST', this.token)
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  deleteSale = (id) => {
    console.log("Attempting to delete", id);
    API.deleteSale(id) 
      .then(res => {
        console.log("response from deleteSale", res)})
        .then(res => this.loadSales())
      .catch(err => console.log(err));
    }

  loadSales = () => {
    // PubSub.Publish('UPDATE_LIST', 'update Now!')

    API.getSales({
      repRepId: localStorage.getItem('rep_id')
    })
    .then(res => {
      console.log('response to load sales.. sales js');
      console.log(res);
      if (res.data != null) {
        this.setState({
          sales: res.data
      })
     }})
     .catch(err => {
        console.log(err)
     }) 
  };
  
render(){
  return (
    <div>
      <Row fluid>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1><strong>Sales Form</strong></h1>
            <p>Quickly see the sales details.</p>
          </Jumbotron>
        </Col>
      </Row>

      <Row fluid>
        <Col size="md-12 sm-12">
          <form className="form-form-horizontal DataForm">  
            <h2>Record Your Sales Below:</h2>
            <Col size="md-12 sm-12">
            <input
              value={this.state.sale_customer}
              onChange={this.handleInputChange}
              name="sale_customer"
              placeholder="customer"
              required
            />
            </Col >
            <Col size="md-12 sm-12">
            <input
              value={this.state.sale_product}
              onChange={this.handleInputChange}
              name="sale_product"
              placeholder="product"
              required
            />
            </Col>

            <Col size="md-12 sm-12">
            <input
              value={this.state.sale_quantity}
              onChange={this.handleInputChange}
              name="sale_quantity"
              placeholder="quantity"
              required
            />
            </Col>

            <Col size="md-12 sm-12">
            <input
              value={this.state.sale_purchasePrice}
              onChange={this.handleInputChange}
              name="sale_purchasePrice"
              placeholder="purchase price"
              required
            />
            </Col>
            <Col size="md-12 sm-12">
            <input
              value={this.state.sale_note}
              onChange={this.handleInputChange}
              name="sale_note"
              placeholder="sale note"
              required
            />
            </Col>
            <FormBtn onClick={this.handleFormSubmit}>Chart sale</FormBtn>
        </form>
      </Col>
      </Row>
      
      <Container fluid>
        {/* Customer Table */}
        <Row fluid>
          <Col size="md-12 sm-12">
            <div className='private text-center'>
              {this.state.sales.length ? (
                <List>
                  {this.state.sales.map(sale => (
                    <ListItem key={sale.sale_id}>
                      <a href={"/sales/" + sale.sale_id}>
                        <strong>
                          {sale.sale_customer}
                          <br></br>
                          {sale.sale_product}
                          <br></br>
                          {sale.sale_quantity}
                          <br></br>
                          {sale.sale_purchasePrice}
                          <br></br>
                          {sale.sale_note}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteSale(sale.sale_id)} />
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
    </div>
      )
    }
  }
  
  export default Sales;