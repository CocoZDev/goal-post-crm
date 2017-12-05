import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
// import API from "../../utils/API";
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
        Sale_purchasePrice: this.state.Sale_purchasePrice,
        sale_note: this.state.sale_note,
        repRepId: localStorage.getItem('rep_id')
      })
      .then(res => {
        console.log('loadcustomers.. Sales', res)
        PubSub.Publish('UPDATE_LIST', 'update Now!');
      })
      .catch(err => console.log(err));
    };
  



  // componentDidMount() {
  //   this.loadCustomers();
  // }

  // loadCustomers = () => {
  //   console.log('loadcustomers.. salesform js', res)
  //   Pubsub.Publish('UPDATE_LIST', 'update Now!');

  //   API.getCusts({
  //     id: localStorage.getItem('rep_id'),

  //   })
  //   .then(res =>{
  //    console.log('response to load customers.. sales js');
  //    console.log(res);
  //    this.setState({
  //      customers: res.data
  //    })
  //    .catch(err => {
  //      console.log(err)
  //    })
  //   }) 
  // };
  
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
              placeholder="purchase"
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

            <FormBtn
            onClick={this.handleFormSubmit}>Chart sale</FormBtn>

          {/* <div className="form-group">
            <label for="exampleFormControlSelect2">Products</label>
            <select className="form-control" id="exampleFormControlSelect2">
              <option>THC Drink</option>
              <option>Bread Loaf</option>
              <option>Gold Caps</option>
              <option>Cheesecake Decadence Bar</option>
              <option>Cannabis Granola</option>
            </select>
          </div> */}
          {/* <label for="exampleFormControlSelect1">Sale Amount</label>
          <div className="input-group">  
          <span className="input-group-addon">$</span>  
          <input type="text" className="form-control" id="decimalPoint"  placeholder="Price"/>      
          </div>
          <div className="outer-money-div">
          <br/>
          <label for="exampleFormControlSelect1">Quantity</label>
            <div className="input-group">  
            <span className="input-group-addon"></span>  
            <input type="text" className="form-control"  placeholder="Number of items"/>      
            </div>
          </div>
          <div>
            <br/>
          <FormBtn>Submit</FormBtn>
          </div> */}
        </form>
      </Col>    </Row>
    </div>
      )
    }

  }
  
  
  export default Sales;