import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/salesAPI.js";
import Jumbotron from "../Jumbotron";
import "../Form/DataForm.css";
import PubSub from 'pubsub-js';
import { TableContainerSales, TableRow} from "../Table";
import "../Table/Table.css";

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
      this.loadSales();
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

  addClassToEvenRow = () => {
    var rows = document.getElementByClassName('table').getElementsByTagName('tr');
    for(var x = 0; x < rows.length; x++) {
        rows[x].className = (x % 2 == 0) ? 'even' : 'odd';
    }
  };
  
render(){
  return (
    <div>
      {/* Sales Form */}
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

            <label htmlFor="sale_customer">Customer:</label>
            <Input
              value={this.state.sale_customer}
              onChange={this.handleInputChange}
              name="sale_customer"
              placeholder="Customer Name"
              required
            />

            <label htmlFor="sale_product">Product Sold:</label>
            <Input
              value={this.state.sale_product}
              onChange={this.handleInputChange}
              name="sale_product"
              placeholder="Name of Product That Was Sold"
              required
            />

            <label htmlFor="sale_quantity">Quantity Sold:</label>
            <Input
              value={this.state.sale_quantity}
              onChange={this.handleInputChange}
              name="sale_quantity"
              placeholder="Quantity Sold"
              required
            />

            <label htmlFor="sale_purchasePrice">Purchase Price:</label>
            <div className="input-group">  
              <span className="input-group-addon">$</span> 
              <Input
                value={this.state.sale_purchasePrice}
                onChange={this.handleInputChange}
                name="sale_purchasePrice"
                placeholder="Purchase Price"
                required
              />
           </div>

           <label htmlFor="sale_note">Sale Note:</label>
            <Input
              value={this.state.sale_note}
              onChange={this.handleInputChange}
              name="sale_note"
              placeholder="Notes on the Sale"
              required
            />

            <FormBtn onClick={this.handleFormSubmit}>Chart sale</FormBtn>
        </form>
      </Col>
      </Row>
      
        {/* Sales Table */}
        <Row fluid>
          <Col size="md-12 sm-12">
            <div className='private text-center sales-table'>
              {this.state.sales.length ? (
                <TableContainerSales>
                  {this.state.sales.map(sale => (
                    <TableRow key={sale.sale_id}>
                        <td className="col-md-1">{sale.sale_id}</td>
                        <td className="col-md-2">{sale.sale_customer}</td>
                        <td className="col-md-2">{sale.sale_product}</td>
                        <td className="col-md-2">{sale.sale_quantity}</td>
                        <td className="col-md-2">{sale.sale_purchasePrice}</td>
                        <td className="col-md-3">{sale.sale_note}</td>
                    </TableRow>
                  ))}
                </TableContainerSales>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </Col>
        </Row>
    </div>

)
// {this.addClassToEvenRow()}; 
}
  }
  
  export default Sales;