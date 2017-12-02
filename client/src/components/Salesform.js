import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Sales from "./Sales/Sales";


const Salesform = () =>

<Container fluid>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Sales Form</strong></h1>
        <p>Quickly see the sales and inventory levels. </p>
      </Jumbotron>
    </Col>
  </Row>

    {/* Row #2 */}
    <Row fluid>
      {/* Vertical Menu */}
      <Col size="md-2 sm-2">
        <VerticalMenu />
      </Col>

      {/* Dashboard Content */}
      <Col size="md-10 sm-10">
        <div className='private text-center'>
          <Sales />
        </div>
      </Col>
    </Row>
  </Container>

export default Salesform;
