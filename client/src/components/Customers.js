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

      <Col size="md-12 sm-12">
        {/* <div className='private text-center'> */}
        <CustForm />
         <CustTable />
        {/* </div> */}
      </Col>
    </Row>

  </div>

export default Customers;
