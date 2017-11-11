import React, { Component } from "react";
import "../../styles/Nav.css";

const Nav = () => 
  <nav class="navbar navbar-inverse navbar-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-right">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
          <a class="navbar-brand" href="/">
          {/* <img id="logo" src="http://www.iconninja.com/files/785/556/35/settings-optimization-tools-earth-globe-configuration-icon.svg" width="50px" alt="logo"></img>  */}
          Sales Toolbox</a>
      </div>
      <div class="collapse navbar-collapse pull-sm-right" id="collapse-right">
        <ul class="nav navbar-nav navbar-right ml-auto">
          <li><a href="/"><span class="glyphicon glyphicon-home"></span> Home </a></li>
          <li><a href="/about"><span class="glyphicon glyphicon-info-sign"></span> About Us</a></li>
          <li><a href="/login"><span class="glyphicon glyphicon-user"></span> Login/Register</a></li>
        </ul>
      </div>
<<<<<<< HEAD
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/">Home </a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login/Register</a></li>
          <li><a href="/Products">Products </a></li>
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
=======
>>>>>>> master
    </div>
  </nav>

export default Nav;
