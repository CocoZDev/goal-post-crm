import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import { Col, Row, Container } from "./Grid";
import Carousel from "./Carousel";
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
    <Carousel />

    <hr />

    <Login />

    <hr />
    
    {/* Links after users logging in */}

    <div className="button groups" style={{padding: "0 0 30px 0"}}>
    <h3>Links after users logging in, will remove later!!!</h3>
        <ul>
            <li><a href="/customers">Customers</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/schedule">Schedule</a></li>
        </ul>
    </div>

</div>

export default Main;
