import React, { Component } from "react";
import "../../styles/Nav.css";

const Nav = () => 
  <nav className="navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-right">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
          <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-briefcase"></span>&nbsp;&nbsp;
          {/* <img id="logo" src="http://www.iconninja.com/files/785/556/35/settings-optimization-tools-earth-globe-configuration-icon.svg" width="50px" alt="logo"></img>  */}
          Goal Post</a>
      </div>
      <div className="collapse navbar-collapse pull-sm-right" id="collapse-right">
        <ul className="nav navbar-nav navbar-right ml-auto">
          <li className="active"><a href="/"><span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Home</a></li>
          <li><a href="#features"><span className="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;Features</a></li>
          <li><a href="#testimonials"><span className="glyphicon glyphicon-comment"></span>&nbsp;&nbsp;Testimonials</a></li>
          <li><a href="#team"><span className="glyphicon glyphicon-user"></span>&nbsp;&nbsp;Team</a></li>
          <li><a href="/contact"><span className="glyphicon glyphicon-envelope"></span>&nbsp;&nbsp;Contact Us</a></li>
          <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login/Register</a></li>
        </ul>
      </div>
    </div>
  </nav>

export default Nav;
