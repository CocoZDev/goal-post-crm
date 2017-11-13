import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import { Link } from "react-router-dom";


const Contact = () =>

<Container>
  {/* Row #1 */}
  <Row>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>Contact Us</strong></h1>
      </Jumbotron>

      {/* Zotabox Contact Form Embed */}
      <div style={{margin:'0 auto', padding: "20px"}} id="zbwid-e422a183"></div>  

    </Col>
  </Row>

</Container>

export default Contact;
