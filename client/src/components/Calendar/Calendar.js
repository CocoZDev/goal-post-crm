import React, { Component } from "react";
import { Input, FormBtn } from "./Form";		
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import { List, ListItem } from "./List";		
import DeleteBtn from "./DeleteBtn";		
import VerticalMenu from "./VerticalMenu";
import CalForm from "./CalForm";

const Calendar = () =>
  <div>
      {/* Row #1 */}
    <Row fluid>
      <Col size="md-12 sm-12">
        <Jumbotron>
          <h1><strong>Schedule</strong></h1>
          <p>See all events here. </p>
        </Jumbotron>
      </Col>

      <Col size="md-12 sm-12">
        {/* <div className='private text-center'> */}
        <CalForm />
         {/* <CustTable /> */}
        {/* </div> */}
      </Col>
    </Row>

  </div>

export default Calendar;