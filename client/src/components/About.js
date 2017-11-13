import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import API from "../utils/API";
import { Link } from "react-router-dom";


const About = () =>

<Container>
  {/* Row #1 */}
  <Row>
    <Col size="md-12">
      <Jumbotron>
        <h1><strong>About Us</strong></h1>
        <p>Get to know our team </p>
      </Jumbotron>
    </Col>
  </Row>

  

  {/* Row #2 */}
  <Row>
    <Col size="md-8">
    <img className="aboutImg" src="/Images/me.jpg" />
    <h2>Dennis Alvey</h2>
    <p>I became interested in web deveopment when I learned that it was possible to record music in your bedroom. Once I got comfortable with
      using a DAW, the necessary skills to troubleshooting and starting a website were a necessity. I then became interested in the possibilities
      that web development held for me not only as a musician, but as a career.
    </p>
    </Col>
  </Row>

  {/* Row #3 */}
  <Row>
    <Col size="md-8">
    <img className="aboutImg" src="/Images/Tatianna.jpg" />
    <h2>Tatianna "Drama-Mam2" Watwood</h2>
    <p>Full stack web developer skilled in creating web applications 
      using front and backend technologies and multiple languagues. 
      Other relevant skills include Public Speaking, Microsoft Powerpoint Presentations,
       and leadership capabilities. Strong engineering professional with a 
       Bachelor of Science (B.S.) focused in Applied Mathematics from California State University, Long Beach.</p>
    </Col>
  </Row>

  {/* Row #4 */}
  <Row>
    <Col size="md-8">
    <img className="aboutImg" src="/Images/jeannine.jpg" />
    <h2>Jeanine "Mufasa" Smith</h2>
    <p>It was my 5th grade California History 
    class that got me hooked on innovative brand strategies. 
    My constant curiosity of how a 150-year-old denim brand 
    aged so gracefully and continuously caught the attention of 
    generations around the world sparked my nonstop quest in testing brand and marketing tactics. </p>
    </Col>
  </Row>

  {/* Row #5 */}
  <Row>
    <Col size="md-8">
    <img className="aboutImg" src="/Images/Guiyu.jpg" />
    <h2>Guiyu "Zoey" Zhao  </h2>
    <p>I am a problem solver who can translate business 
      needs into client-friendly functions that will 
      expand your website’s influence and increase your web conversions. 
      Strong multitasking, project management skills, and high level of attention to details.</p>
    </Col>
  </Row>

  {/* Row #6 */}
  <Row>
    <Col size="md-8">
    <img className="aboutImg" src="/Images/Brian.jpg" />
    <h2>Brian "The Captain" Hart  </h2>
    <p>I currently teach Algebra, Physics, and Robotics. 
      I have been teaching at my current school for 11 years.</p>
    </Col>
  </Row>


</Container>

export default About;
