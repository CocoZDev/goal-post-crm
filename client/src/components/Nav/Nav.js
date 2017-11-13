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
          <li><a href="/contact"><span class="glyphicon glyphicon-envelope"></span> Contact Us</a></li>
          <li><a href="/login"><span class="glyphicon glyphicon-user"></span> Login/Register</a></li>          
        </ul>
      </div>
    </div>
  </nav>

export default Nav;
