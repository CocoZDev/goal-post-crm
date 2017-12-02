import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import { Col, Row, Container } from "./components/Grid";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main.js";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Schedule from "./components/Schedule";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import PrivateContainer from "./components/PrivateContainer";
import General from "./styles/General.css";

const App = () =>
  <Router>
    <div id="container">
      <Container fluid>
        <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/private" component={PrivateContainer} />
            {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/schedule" component={Schedule} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        <Footer />
      </Container>
      </div>
  </Router>;

export default App;
