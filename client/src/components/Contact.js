import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import { Link } from "react-router-dom";


const Contact = () =>

<div>

{/* <Container fluid> */}
  <Row fluid>
    <Col size="md-12 sm-12">   
      <Jumbotron>
        <h1>Contact Us</h1>
      </Jumbotron>
    </Col>
  </Row>

{/* </Container> */}

<Container fluid>
  {/* Row #2 */}
  {/* <Row>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Contact Us</strong></h1>
      </Jumbotron>
    </Col>
  </Row> */}

  {/* Row #3 */}
  {/* Zotabox Contact Form Embed */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <center><div style={{padding: "20px 0 20px 0"}} id="zbwid-e422a183"></div></center>  

    </Col>
  </Row>
</Container>

</div>
export default Contact;
