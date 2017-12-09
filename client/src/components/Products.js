import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";		
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
// import Nav from "./Nav";		
// import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import "./Form/DataForm.css";
import PubSub from 'pubsub-js';
import { TableContainerProduct, TableRow} from "./Table";
import "./Table/Table.css";

class Products extends Component {
  state = {
    products: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
  event.preventDefault();
  console.log("Handling new product.. Products.js");
  API.postProducts({
    product_name: this.state.product_name,
    product_description: this.state.product_description,
    product_quantity: this.state.product_quantity,
    repRepId: localStorage.getItem('rep_id')
  })
  // .then(res => console.log("you have entered your product..Products.js"))
    .then(res => {
      console.log('postProducts..Products.js ', res);
      this.loadProducts();
    })
  .catch(err => console.log (err));

  //Clear form data after submit
  this.setState({
    product_name: "",
    product_description: "",
    product_quantity: "",
  });
};

componentWillMount() {
  this.token = PubSub.subscribe('UPDATE_LIST', this.loadProducts.bind(this));
}

componentDidMount() {
  this.loadProducts();
  PubSub.publish('UPDATE_LIST', this.token)
  }

componentWillUnmount() {
  PubSub.unsubscribe(this.token);
}

loadProducts = () => {
  API.getProducts({
    repRepId: localStorage.getItem('rep_id')
  })
    .then(res => {
      console.log('response to load products..Products.js');
      console.log(res);
      if (res.data) {
        this.setState({
          products: res.data
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
};

  addClassToEvenRow = () => {
    var rows = document.getElementByClassName('table').getElementsByTagName('tr');
    for (var x = 0; x < rows.length; x++) {
      rows[x].className = (x % 2 === 0) ? 'even' : 'odd';
    }
  };


render() {
return (
<div>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Products</strong></h1>
        <p>Find product photo and details here. </p>
      </Jumbotron>
    </Col>
  </Row>

  <Row fluid>
    {/* Product Form */}
    <Col size="md-12 sm-12">
      <center>
          <form className="DataForm" style={{ display: 'block' }} >
            <h2>Add A New Product</h2>
            <Input type="text" name="product_name" id="product_name" tabIndex="1" placeholder="Add Product Name" value={this.state.product_name} onChange={this.handleInputChange} required></Input>
            <Input type="text" name="product_description" id="product_description" tabIndex="2" placeholder="Add Description" value={this.state.product_description} onChange={this.handleInputChange} required></Input>
            <Input type="number" name="product_quantity" id="product_quantity" tabIndex="2" placeholder="Add Quantity" value={this.state.product_quantity} onChange={this.handleInputChange} required></Input>
            <FormBtn type="submit" name="product-submit" id="product-submit" tabIndex="4" className="form-control btn" value="submit_product" onClick={this.handleFormSubmit}>Add Product
          </FormBtn>
          </form>
        </center>
    </Col>
    </Row>

    {/* Product Table */}
      <Row fluid>
        <Col size="md-12 sm-12">
          <div className='private text-center sales-table'>
            {this.state.products.length ? (
              <TableContainerProduct>
                {this.state.products.map(product => (
                  <TableRow key={product.product_id}>
                      <td className="col-md-1">{product.product_id}</td>
                      <td className="col-md-2">{product.product_name}</td>
                      <td className="col-md-2">{product.product_quantity}</td>
                      <td className="col-md-3">{product.product_description}</td>
                  </TableRow>
                ))}
              </TableContainerProduct>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </div>
        </Col>
      </Row>
  </div>

)
}
}


export default Products;
