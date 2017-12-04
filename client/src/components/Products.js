import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";		
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";		
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "./Form/DataForm.css";

class Products extends Component {
  state = {
    product_name: "",
    product_description:"",
    product_quantity:""
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
    product_quantity: this.state.product_quantity
  })
  // .then(res => console.log("you have entered your product..Products.js"))
    .then(res => window.location = '/Products')
  .catch(err => console.log (err));
};

render() {
return (

<div>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Products</strong></h1>
        <p>Find product photo and details here. </p>
      </Jumbotron>
    </Col>
  </Row>

  <Row>
           
    {/* Product Form */}
    <Col size="md-6 sm-6">
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

    {/* Product Table */}
    <Col size="md-6 sm-6">
        <h4>Product Database</h4>
        <table className="product-table table-bordered text-center">
          <thead>
            <tr>
              <th className="text-center">Product Name</th>
              <th className="text-center">Description</th>
              <th className="text-center">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Placeholder</td>
              <td>Placeholder</td>
              <td>Placeholder</td>
            </tr>
            <tr>
              <td>Placeholder</td>
              <td>Placeholder</td>
              <td>Placeholder</td>
            </tr>
            <tr>
              <td>Placeholder</td>
              <td>Placeholder</td>
              <td>Placeholder</td>
            </tr>
          </tbody>
        </table>
    </Col>
  </Row>
</div>
);
}
}

export default Products;
