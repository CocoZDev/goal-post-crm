import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";		
import { Input, FormBtn } from "./Form";		
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";		
import VerticalMenu from "./VerticalMenu";
import CustSchedule from "./CustSchedule";
import CustMap from "./CustMap";

const Schedule = () =>

<div>

  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Schedule</strong></h1>
        <p>Plan your sales meeting and delivery schedule. </p>
      </Jumbotron>
    </Col>
  </Row>


    {/* Dashboard Content */}
    <Row fluid>
    <Col size="md-10 sm-10">
      <CustSchedule />
    </Col>
  </Row>

    {/* Map */}
    <Row fluid>
      <Col size="md-10 sm-10">
       <CustMap />
      </Col>
    </Row>


</div>
export default Schedule;