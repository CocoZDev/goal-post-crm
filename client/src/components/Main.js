import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import { Col, Row, Container } from "./Grid";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Customers from "./Customers";
import Products from "./Products";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Login from "./Login";

const Main = () =>

<Container>
    <Jumbotron> 
        <h3>Placeholder on Main Components for content to be added, such as benefit overview in slider or 3-column text. </h3>
    </Jumbotron>

    <hr />

    <Row>
        <Login />
    </Row>

    <hr />
    
    {/* Links after users logging in */}

    <div className="button groups">
    <h3>Links after users logging in, will remove later!!!</h3>
        <ul>
            <li><a href="/customers">Customers</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/schedule">Schedule</a></li>
        </ul>
    </div>

</Container>


export default Main;
