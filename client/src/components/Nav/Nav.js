import React, { Component } from "react";
import "../../styles/Nav.css";

const Nav = () => 
  <nav class="navbar navbar-inverse navbar-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Sales Tools</a>
      </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/">Home </a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login/Register</a></li>
          {/* Dropdown Menu */}
          {/* <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">AfterLogin - Dvlpmt Only
            <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li class="divider"><a href="/customers">Customers</a></li>
              <li class="divider"><a href="/dashboard">Dashboard</a></li>
              <li class="divider"><a href="/schedule">Driving Routes/Schedule</a></li>
            </ul>
          </li> */}
        {/* End of Dropdown Menu */}

      </ul>
    </div>
  </nav>

export default Nav;
