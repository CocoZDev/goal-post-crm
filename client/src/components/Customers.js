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
  <div>
      {/* Row #1 */}
    <Row>
      <Col size="md-12 sm-12">
        <Jumbotron>
          <h1><strong>Customers</strong></h1>
          <p>Quickly see all the customers in the database. </p>
        </Jumbotron>
      </Col>
    </Row>

    {/* Row #2 */}
    <Row>
    <div className='private text-center'>
      <Col size="md-12 sm-12">
        <CustForm />
      </Col>
    </div>       
    </Row> 

    <Row>
      {/* Customers Content */}
        <Col size="md-12 sm-12">
          <CustTable />
        </Col>
    </Row>

  </div>

export default Customers;
