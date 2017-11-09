import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main.js";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Schedule from "./components/Schedule";
import Login from "./components/Login";

const App = () =>
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      <Footer />
      </div>
  </Router>;

export default App;
