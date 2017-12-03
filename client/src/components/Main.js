import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import { Col, Row, Container } from "./Grid";
import Footer from "./Footer";
import General from "../styles/General.css";
import Jumbotron from "./Jumbotron";
import Customers from "./Customers";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Login from "./Login";


  class Main extends Component {

    // componentDidMount() {
    //     this.$el = $(this.el);
    //     this.$el.somePlugin();
    // }

    // componentWillUnmount() {
    // this.$el.somePlugin('destroy');
    // }

    render() {
        return (
        <div>
            {/* Video Section */}

            <section className="parallax" style={{ 'min-height': '100vh' }}>
                <section className="container">
                    <video autoPlay="true" loop muted poster="../styles/img/mobile-friendly.jpg" className="video">
                        <source src="https://ak3.picdn.net/shutterstock/videos/3894353/preview/stock-footage-two-young-businessmen-who-are-old-acquaintances-meet-and-shake-hands-in-a-busy-modern-office-buildi.mp4" type="video/mp4" />
                    </video>
                </section>
                <section className="content">
                    <div className="intro animated bounceInUp">
                        <h1 style= {{'font-size':'80px', color:'#0060DF'}}>Goal Post</h1>
                        <h2>On-the-go sales toolbox <br />for busy salespeople </h2>
                    </div>
                </section>
            </section>

            {/* Features Section */}
            <section className="parallax parallax-1" id="why" style={{'min-height':'40vh'}}>
                <div className="container" id="why-header">
                    <h1>Why Us?</h1>
                    <h3>Our Competitive Advantages</h3>
                </div>
            </section>
            <section className="content" id="why-content">
                <div className="container animated slideInUp" style={{ 'min-height': '50vh', 'paddingTop': '55px' }}>
                    <center>
                        <Row>
                            <Col size="md-3 sm-3">
                                <a className="fa"><i className="fa fa-mobile" aria-hidden="true"></i></a>
                                <h3>Responsive <br />Design</h3>
                                <p>Use it on your computer, mobile phone, or tablet.</p>
                            </Col>
                            <Col size="md-3 sm-3">
                                <a className="fa"><i className="fa fa-users" aria-hidden="true"></i></a>
                                <h3>Team Info <br />Sharing</h3>
                                <p>Users from the same team or company can share universal information such as product inventory.</p>
                            </Col>
                            <Col size="md-3 sm-3">
                                <a className="fa"><i className="fa fa-cloud" aria-hidden="true"></i></a>
                                <h3>Cloud</h3>
                                <p>No need to install software. <br />Easily access all your data anywhere with Internet connection.</p>
                            </Col>
                            <Col size="md-3 sm-3">
                                <a className="fa"><i className="fa fa-lock" aria-hidden="true"></i></a>
                                <h3>Secure</h3>
                                <p>Your data is secure with our technology.</p>
                            </Col>
                        </Row>
                    </center>
                </div>
            </section>

            {/* Features Section */}
            <section className="parallax parallax-2" id="features" style={{ 'min-height': '40vh' }}>
                <div className="container">
                    <h1>Features</h1>
                    <h3>4 Ways We Can Make Your Life Easier. </h3>
                    <h5 style={{ 'color':'#ED4C37','text-decoration': 'underline', 'text-underline-position': 'under'}}>Click on icons below for live demo.</h5>
                </div>
            </section>
            <section className="content" id="features-content">
                <div className="container" style={{ 'min-height': '50vh', 'paddingTop': '55px' }}>
                    <center>
                        <Row>
                            <Col size="md-3 sm-3">
                                <a className="fa" href="/#dashboard"><i className="fa fa-line-chart" aria-hidden="true"></i></a>
                                <h3>Dashboard</h3>
                                <p>Quickly find out how much progress you made towards monthly or weekly sales goals.</p>
                            </Col>
                            <Col size="md-3 sm-3">
                                <a className="fa" href="/#database"><i className="fa fa-database" aria-hidden="true"></i></a>
                                <h3>Database Management</h3>
                                <p>Easily add and update your customers' information and product details.</p>
                            </Col>
                            <Col size="md-3 sm-3">
                                <a className="fa" href="/#schedule"><i className="fa fa-calendar" aria-hidden="true"></i></a>
                                <h3>Schedule</h3>
                                <p>Use our calendar to plan your sales meeting and delivery schedule.</p>
                            </Col>
                            <Col size="md-3 sm-3">
                                <a className="fa" href="/#route"><i className="fa fa-car" aria-hidden="true"></i></a>
                                <h3>Optimized <br />Driving Route</h3>
                                <p>Plan your sales trip to multiple customers with our optimized driving routes.</p>
                            </Col>
                        </Row>
                    </center>
                </div>
            </section>

            {/* Product Demo */}
            <section className="parallax parallax-3" style={{ 'min-height': '40vh' }}>
                <div className="container">
                    <h1>Live Demo</h1>
                    <h3>See the Features in Action</h3>
                </div>
            </section>
            <section className="content">
                <div className="container" id="demo-container">
                    <Container> 
                    
                        {/* Row #1 */}
                        <Row>
                            <div id="dashboard">
                                <Col size="md-5 sm-5"> 
                                    <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" /></a>
                                </Col>
                                <Col size="md-7 sm-7"> 
                                    <h4 className='demo-content' >Dashboard</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. 
                                    </p>
                                </Col>
                            </div>
                        </Row>

                        {/* Row #2 */}
                        <Row>
                            <div id="database">
                                <Col size="md-5 sm-5"> 
                                    <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" 
                                    /></a>
                                </Col>
                                <Col size="md-7 sm-7"> 
                                    <h4 className='demo-content'>Database Management</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. 
                                    </p>
                                </Col>
                            </div>
                        </Row>

                        {/* Row #3 */}
                        <Row>
                            <div id="schedule">
                                <Col size="md-5 sm-5"> 
                                    <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" /></a>
                                </Col>
                                <Col size="md-7 sm-7"> 
                                    <h4 className='demo-content'>Schedule</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                    </p>
                                </Col>
                            </div>
                        </Row>

                        {/* Row #4 */}
                        <Row>
                            <div id="route">
                                <Col size="md-5 sm-5"> 
                                    <a><img className='demo-gif' src="https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif" /></a>                        
                                </Col>
                                <Col size="md-7 sm-7"> 
                                    <h4 className='demo-content'>Optimized Driving Route</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. 
                                    </p>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="parallax parallax-4" id="testimonials" style={{'min-height':'40vh'}}>
                <div className="container">
                    <h1>Testimonials</h1>
                    <h3>what our clients are saying</h3>
                </div>
            </section>
            <section className="content" style={{ 'min-height': '50vh', 'padding': '5vh' }}>
                <Container fluid>
                    <Row fluid>
                        <div id="testimonial" className="carousel fade-carousel slide testimonial_indicators testimonial_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="3500" data-duration="2000">
                            {/* <div className="testimonial_header">
                                <h4>what our clients are saying</h4>
                            </div> */}

                            {/* <!-- Indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#testimonial" data-slide-to="0" className="active"></li>
                                <li data-target="#testimonial" data-slide-to="1"></li>
                                <li data-target="#testimonial" data-slide-to="2"></li>
                            </ol>

                            {/* <!-- Wrapper for slides --> */}
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="testimonial_slide">
                                        <img src="images/t-1.jpg" className="img-circle img-responsive" />
                                        <h5><i>"I love Goal Post! Great tool to keep track of my customer information, sales notes, and plan my clients visits."</i></h5>
                                        <h5>- Alex</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial_slide">
                                        <img src="images/t-2.jpg" className="img-circle img-responsive" />
                                        <h5><i>"I wish I knew about Goal Post years earlier. Every salesperson should use GoalPost."</i></h5>
                                        <h5>- Brandon</h5>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial_slide">
                                        <img src="images/t-3.jpg" className="img-circle img-responsive" />
                                        <h5><i>"No more piles of sales notes. With Goal Post, now I can keep my customer records digitally in the cloud."</i></h5>
                                        <h5>- Lisa</h5>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Left and right controls --> */}
                            <a className="left carousel-control" href="#testimonial" role="button" data-slide="prev">
                                <span className="fa fa-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#testimonial" role="button" data-slide="next">
                                <span className="fa fa-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            
            {/* Team Section */}
            <section className="parallax parallax-5" id="team" style={{'min-height':'40vh'}}>
                <div className="container">
                    <h1>Meet Our Team</h1>
                    <h3><a href="/about">Learn More</a></h3>
                </div>
            </section>
            <section className="content team" style={{ 'min-height': '50vh', 'padding': '5vh' }}>
            <center>
                <Container fluid>
                    {/* Row #1 */}
                    <Row fluid>
                        <Col size="md-4 sm-4">
                            <img className="aboutImg img-circle" src="/images/jeannine.jpg" />
                            <h4>Jeanine Smith</h4>
                            <p>Project Manager</p>
                        </Col>

                        <Col size="md-4 sm-4">
                            <img className="aboutImg img-circle" src="/images/Guiyu.jpg" />
                            <h4>Guiyu (Zoey) Zhao  </h4>
                            <p>Front End Developer &amp; QA Manager</p>
                        </Col>

                        <Col size="md-4 sm-4">
                            <img className="aboutImg img-circle" src="/images/Dennis.jpg" />
                            <h4>Dennis Alvey</h4>
                            <p>Front End Developer &amp; UI/UX Manager</p>
                        </Col>
                    </Row>

                    {/* Row #2 */}
                    <Row fluid>
                        <Col size="md-6 sm-6">
                            <img className="aboutImg img-circle" src="/images/Brian.jpg" />
                            <h4>Brian Hart  </h4>
                            <p>Back End Developer &amp; Git Master</p>
                        </Col>

                        <Col size="md-6 sm-6">
                            <img className="aboutImg img-circle" src="/images/Tatianna.jpg" />
                            <h4>Tatianna Watwood</h4>
                            <p>Back End Developer &amp; Code Review Manager</p>
                        </Col>
                    </Row>

                </Container>
                </center>
            </section>
        </div>
    );
}   
}
export default Main;
