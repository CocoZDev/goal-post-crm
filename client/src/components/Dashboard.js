import React from "react";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import VerticalMenu from "./VerticalMenu";

const Dashboard = () =>

<Container fluid>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <Jumbotron>
        <h1><strong>Dashboard</strong></h1>
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
          <h4>Dashboard Placeholder Section</h4>
        </div>
      </Col>
    </Row>
  </Container>

export default Dashboard;
