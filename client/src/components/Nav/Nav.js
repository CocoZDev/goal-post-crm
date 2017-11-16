import React, { Component } from "react";
import "../../styles/Nav.css";

const Nav = () => 
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-right">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
          <a className="navbar-brand" href="/">
          {/* <img id="logo" src="http://www.iconninja.com/files/785/556/35/settings-optimization-tools-earth-globe-configuration-icon.svg" width="50px" alt="logo"></img>  */}
          Sales Toolbox</a>
      </div>
      <div className="collapse navbar-collapse pull-sm-right" id="collapse-right">
        <ul className="nav navbar-nav navbar-right ml-auto">
          <li><a href="/"><span className="glyphicon glyphicon-home"></span> Home </a></li>
          <li><a href="/about"><span className="glyphicon glyphicon-info-sign"></span> About Us</a></li>
          <li><a href="/contact"><span className="glyphicon glyphicon-envelope"></span> Contact Us</a></li>
          <li><a href="/login"><span className="glyphicon glyphicon-user"></span> Login/Register</a></li>
          <li><a href="/products"><span className="glyphicon glyphicon-home"></span> Products </a></li>
        </ul>
      </div>
    </div>
  </nav>

export default Nav;
