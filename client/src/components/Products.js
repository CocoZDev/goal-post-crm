import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";

const Products = () =>

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
</Container>

export default Products;
