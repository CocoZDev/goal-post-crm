import React, { Component } from "react";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import { List, ListItem } from "./List";
import DeleteBtn from "./DeleteBtn";
import VerticalMenu from "./VerticalMenu";
import CustTable from "./CustTable";
import CustForm from "./CustForm";

  const Customers = () =>
      <Container fluid>
        {/* Row #1 */}
        <Row fluid>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1><strong>Customers</strong></h1>
              <p>Quickly see all the customers you need to visit. </p>
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
          <Col size="md-12 sm-12">
            <CustTable />
          </Col>
        </Row>
          {/* Row #3 */}
        <Row fluid>
          <Col size="md-12 sm-12">
            <CustForm />
          </Col>
        </Row>      
      </Container>


export default Customers;
