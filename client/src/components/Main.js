import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import { Col, Row, Container } from "./Grid";
// import Carousel from "./Carousel";
// import HeroImage from "./HeroImage";
import Footer from "./Footer";
import General from "../styles/General.css";
import Jumbotron from "./Jumbotron";
import Customers from "./Customers";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Login from "./Login";

const Main = () =>
    <div>
        {/* Video Section */}

        <section className="parallax" style={{ 'height': '100vh' }}>
            <section className="container">
                    <video autoplay="true" loop muted poster="../styles/img/mobile-friendly.jpg" class="video">
                        <source src="https://ak3.picdn.net/shutterstock/videos/3894353/preview/stock-footage-two-young-businessmen-who-are-old-acquaintances-meet-and-shake-hands-in-a-busy-modern-office-buildi.mp4" type="video/mp4" />
                    </video>
            </section>
            <section className="content">
                <div className="container">
                    <h1>Stock Video and Placeholder for</h1>
                    <h1>Scolling Text:</h1>
                    <h1>"Goal Post Can _______"</h1>
                    <p></p>
                </div>
            </section>
        </section>

        {/* Features Section */}
        <section className="parallax parallax-1" id="features" style={{'height':'30vh'}}>
            <div className="container">
                <h1>Features</h1>
            </div>
        </section>
        <section className="content">
            <div className="container" style={{'height':'68vh', 'padding': '3vh'}}>
                <center>
                    <Row>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-mobile" aria-hidden="true"></i></a>
                            <h3>Mobile-Responsive</h3>
                            <p>Use it on your computer, mobile phone, or tablet.</p>
                        </Col>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-users" aria-hidden="true"></i></a>
                            <h3>Team Info Sharing</h3>
                            <p>Users from the same team or company can share universal information such as product inventory.</p>
                        </Col>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-cloud" aria-hidden="true"></i></a>
                            <h3>Cloud</h3>
                            <p>No need to install software. <br />Easily access all your data anywhere with Internet connection.</p>
                        </Col>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-lock" aria-hidden="true"></i></a>
                            <h3>Secure</h3>
                            <p>Your data is secure with our technology.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
                            <h3>Dashboard</h3>
                            <p>Quickly find out how much progress you made towards monthly or weekly sales goals.</p>
                        </Col>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-database" aria-hidden="true"></i></a>
                            <h3>Database Management</h3>
                            <p>Easily add and update your customers' information and product details.</p>
                        </Col>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-calendar" aria-hidden="true"></i></a>
                            <h3>Schedule</h3>
                            <p>Use our calendar to plan your sales meeting and delivery schedule.</p>
                        </Col>
                        <Col size="md-3">
                            <a className="fa"><i className="fa fa-car" aria-hidden="true"></i></a>
                            <h3>Optimized Driving Route</h3>
                            <p>Plan your sales trip to multiple customers with our optimized driving routes.</p>
                        </Col>
                    </Row>
                </center>
            </div>
        </section>
        <hr />
        {/* Product Demo */}
        <center>
        <section className="content">
            <div className="container">
                <h2 style={{ 'text-decoration': 'underline'}}>Feature Demo</h2>
                <Container> 
                
                    {/* Row #1 */}
                    <Row>
                        <Col size="md-5"> 
                            <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" /></a>
                        </Col>
                        <Col size="md-7"> 
                            <h4>Dashboard</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>

                    {/* Row #2 */}
                    <Row>
                        <Col size="md-7"> 
                            <h4>Customer Database Management</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                        <Col size="md-5"> 
                            <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" 
                            /></a>
                        </Col>
                    </Row>

                    {/* Row #3 */}
                    <Row>
                        <Col size="md-5"> 
                            <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" /></a>
                        </Col>
                        <Col size="md-7"> 
                            <h4>Products</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>

                    {/* Row #4 */}
                    <Row>
                        <Col size="md-7"> 
                            <h4>Schedule</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                        <Col size="md-5"> 
                            <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" /></a>                        
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        </center>
        {/* Testimonials Section */}
        <section className="parallax parallax-2" id="testimonials" style={{'height':'50vh'}}>
            <div className="container">
                <h1>Testimonials</h1>
                <h3>Hear directly from our customers</h3>
            </div>
        </section>
        <section className="content" style={{'height':'50vh'}}>
            <Container fluid>
                <Row fluid>
                    <h3>(Photo in cirlce and testimonials)</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Row>
            </Container>
        </section>
        
        {/* Team Section */}
        <section className="parallax parallax-3" id="team" style={{'height':'50vh'}}>
            <div className="container">
                <h1>Meet Our Team</h1>
                <h3><a href="/about" style={{'color':'white'}}>Learn More</a></h3>
            </div>
        </section>
        <section className="content team" style={{ 'height': '45vh' }} >
        <center>
            <Container fluid>
                {/* Row #1 */}
                <Row fluid>
                    <Col size="md-4">
                        <img className="aboutImg img-circle" src="/images/jeannine.jpg" />
                        <h4>Jeanine Smith</h4>
                        <p>Project Manager</p>
                    </Col>

                    <Col size="md-4">
                        <img className="aboutImg img-circle" src="/images/Guiyu.jpg" />
                        <h4>Guiyu (Zoey) Zhao  </h4>
                        <p>Front End Developer &amp; QA Manager</p>
                    </Col>

                    <Col size="md-4">
                        <img className="aboutImg img-circle" src="/images/me.jpg" />
                        <h4>Dennis Alvey</h4>
                        <p>Front End Developer &amp; UI/UX Manager</p>
                    </Col>
                </Row>

                {/* Row #2 */}
                <Row fluid>
                    <Col size="md-6">
                        <img className="aboutImg img-circle" src="/images/Brian.jpg" />
                        <h4>Brian Hart  </h4>
                        <p>Back End Developer &amp; Git Master</p>
                    </Col>

                    <Col size="md-6">
                        <img className="aboutImg img-circle" src="/images/Tatianna.jpg" />
                        <h4>Tatianna Watwood</h4>
                        <p>Back End Developer &amp; Code Review Manager</p>
                    </Col>
                </Row>

            </Container>
            </center>
        </section>
    </div>

export default Main;
