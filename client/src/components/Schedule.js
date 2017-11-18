import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
// import API from "../utils/API";

const Schedule = () =>

<Container fluid>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Schedule</strong></h1>
        <p>Plan your sales meeting and delivery schedule. </p>
      </Jumbotron>
    </Col>
  </Row>

  {/* Row #2 */}
  <Row fluid>
    {/* Vertical Menu */}
    <Col size="md-4">
      <VerticalMenu>
      </VerticalMenu>
    </Col>

    {/* Dashboard Content */}
    <Col size="md-8">
      <p>Schedule Placeholder Section</p>
    </Col>
  </Row>
</Container>

export default Schedule;