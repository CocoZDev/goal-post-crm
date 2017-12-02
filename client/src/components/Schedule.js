import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
// import API from "../utils/API";

const Schedule = () =>

<div>

  <Row>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Schedule</strong></h1>
        <p>Plan your sales meeting and delivery schedule. </p>
      </Jumbotron>
    </Col>
  </Row>


  <Row>
    <Col size="md-12 sm-12">
      <div className='private text-center'>
        <h4>Schedule Placeholder Section</h4>
      </div>
    </Col>
  </Row>


</div>
export default Schedule;