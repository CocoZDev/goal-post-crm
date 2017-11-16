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
    description:"",
    quantity:""
  };


handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleSubmit = event => {
  event.preventDefault();
  console.log("Handling register.. Products.js");
  API.postProducts({
    product_name: this.state.product_name,
    description: this.state.description,
    quantity: this.state.quantity
  })

  .then(res => console.log("you have entered your product."))
  .catch(err => console.log (err, "Your product has not been entered!"));
}
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

  <form id="product-form" style={{ display: 'block'}} >
                        <Input type="text" name="product_name" id="product_name" tabindex="1" placeholder="product" value={this.state.product_name} onChange={this.handleInputChange} required></Input>
                        <Input type="text" name="description" id="description" tabindex="2" placeholder="description" value={this.state.description} onChange={this.handleInputChange} required></Input>
                        <Input type="number" name="quantity" id="quantity" tabindex="2" placeholder="quantity" value={this.state.quantity} onChange={this.handleInputChange} required></Input>
                        
                        
                        <Row>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                              type="submit" name="product-submit" id="product-submit" tabindex="4" className="form-control btn btn-login" 
                              value="submit_product" onClick={this.handleLogin}>product add
                            </FormBtn>
                          </Col>
                        </Row>
                  
                        <Row>
                          <Col size="lg-12" className="text-center">
                              <a href="" tabindex="5" className="forgot-password">Forgot Password?</a>
                          </Col>
                        </Row>
                    </form>
</Container>
);
}
}

export default Products;
