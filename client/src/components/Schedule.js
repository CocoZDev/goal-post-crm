import React from "react";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import VerticalMenu from "./VerticalMenu";
import CustSchedule from "./CustSchedule";
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


    {/* Dashboard Content */}
    <Row>
    <Col size="md-10 sm-10">
      <CustSchedule />
    </Col>
  </Row>


</div>
export default Schedule;