import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn } from "./Form";
import { Col, Row, Container } from "./Grid";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import VerticalMenu from "./VerticalMenu";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Products from "./Products";
import Schedule from "./Schedule";
import Sales from "./Sales/Sales";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class PrivateContainer extends Component {
  state = {
    currentPage: "Dashboard"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Dashboard") {
      return <Dashboard />;
    }
    else if (this.state.currentPage === "Customers") {
      return <Customers />;
    }
    else if (this.state.currentPage === "Products") {
      return <Products />;
    }
    else if (this.state.currentPage === "Sales") {
      return <Sales />;
    }
    else if (this.state.currentPage === "Schedule") {
      return <Schedule />;
    }
    // else {
    //   return <Contact />;
    // };
  };

  render() {
    return (
      <div id="private-container">
        <Row>
          <Col size="md-2 sm-2">
            <VerticalMenu
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
          </Col>
          <Col size="md-10 sm-10">
            {/* Based on `this.state.currentPage`, render the appropriate component here. */}
            {this.renderPage()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default PrivateContainer;