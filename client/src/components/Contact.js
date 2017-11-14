import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import { Link } from "react-router-dom";


const Contact = () =>

<div>

<Container>
  <Row>
    <Col size="md-12">   
      <div className="banner container" 
        /* Crop the banner image */
        style={{width: '100%', height: '250px', overflow: 'hidden'}}>   
        <img className="banner img-responsive" src="/images/call-center-istockphoto-178570372.jpg" 
        /* Pan banner inside banner container */
        style={{position:'relative', 'margin': '-80px 0 80px 0'}}/> 
        <div className="carousel-caption" style={{'text-shadow': '2px 2px 4px #000000'}}>
          <h1><strong>Contact Us</strong></h1>
        </div>
      </div>
    </Col>
  </Row>

</Container>

<Container>
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
  <Row>
    <Col size="md-12">
      <center><div style={{padding: "20px 0 20px 0"}} id="zbwid-e422a183"></div></center>  

    </Col>
  </Row>
</Container>

</div>
export default Contact;
