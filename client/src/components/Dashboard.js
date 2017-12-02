import React from "react";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import VerticalMenu from "./VerticalMenu";

const Dashboard = () =>

<div>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Dashboard</strong></h1>
        <p>Quickly see the sales and inventory levels. </p>
      </Jumbotron>
    </Col>
  </Row>

      {/* Dashboard Content */}
  <Row>
      <Col size="md-12 sm-12">
        <div className='private text-center'>
          <h4>Dashboard Placeholder Section</h4>
        </div>
      </Col>
    </Row>
</div>

export default Dashboard;
