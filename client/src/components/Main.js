import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import { Col, Row, Container } from "./Grid";
// import Carousel from "./Carousel";
import HeroImage from "./HeroImage";
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

    <Container fluid>
        <Row fluid>
            <HeroImage />
        </Row>
        {/* <Row fluid>
            <Products />
        </Row>
        <Row fluid>
            <Products  />
        </Row>
        <Row fluid>
            <Products  />
        </Row> */}
   </Container> 
</div>

export default Main;
