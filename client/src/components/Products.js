import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";

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
<Container>
  {/* Row #1 */}
  <Row>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Products</strong></h1>
        <p>Find product photo and details here. </p>
      </Jumbotron>
    </Col>
  </Row>

  {/* Row #2 */}
  <Row>
    {/* Vertical Menu */}
    <Col size="md-4">
      <p>This should be an image</p>
    </Col>

    {/* Products Content */}
    <Col size="md-8">
      <p>Product description</p>
    </Col>
  </Row>
                        
  <Row>
    <Col size="sm-6 sm-offset-3">
        <form id="product-form" style={{ display: 'block' }} >
          <Input type="text" name="product_name" id="product_name" tabIndex="1" placeholder="product" value={this.state.product_name} onChange={this.handleInputChange} required></Input>
          <Input type="text" name="product_description" id="product_description" tabIndex="2" placeholder="description" value={this.state.product_description} onChange={this.handleInputChange} required></Input>
          <Input type="number" name="product_quantity" id="product_quantity" tabIndex="2" placeholder="quantity" value={this.state.product_quantity} onChange={this.handleInputChange} required></Input>               
          <FormBtn type="submit" name="product-submit" id="product-submit" tabIndex="4" className="form-control btn btn-login" value="submit_product" onClick={this.handleFormSubmit}>product add
          </FormBtn>
        </form>
    </Col>
  </Row>

</Container>
);
}
}

export default Products;
