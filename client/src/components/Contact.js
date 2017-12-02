import React from "react";
import { Col, Row } from "./Grid";
import Jumbotron from "./Jumbotron";

const Contact = () =>

<div>
  {/* Row #1 */}
  <Row fluid>
    <Col size="md-12 sm-12">   
      <Jumbotron>
        <h1>Contact Us</h1>
      </Jumbotron>
    </Col>
  </Row>

  {/* Row #2 */}
  {/* Zotabox Contact Form Embed */}
  <Row fluid>
    <Col size="md-12 sm-12">
      <center><div style={{padding: "20px 0 20px 0", 'height': '600px'}} id="zbwid-e422a183"></div></center>  

    </Col>
  </Row>

</div>
export default Contact;
