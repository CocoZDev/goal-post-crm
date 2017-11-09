import React, { Component } from "react";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import VerticalMenu from "./VerticalMenu";
// import API from "../utils/API";

const Customers = () =>

<Container>
  {/* Row #1 */}
  <Row>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Customers</strong></h1>
        <p>Quickly see all the customers you need to visit. </p>
      </Jumbotron>
    </Col>
  </Row>

  {/* Row #2 */}
  <Row>
    {/* Vertical Menu */}
    <Col size="md-4">
      <VerticalMenu>
      </VerticalMenu>
    </Col>

    {/* Dashboard Content */}
    <Col size="md-8">
      <p>Customers Placeholder Section</p>
    </Col>
  </Row>
</Container>

export default Customers;
