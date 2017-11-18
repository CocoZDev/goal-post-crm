import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
import "../../styles/Login.css";
import API from "../../utils/API";


// Code Reference from https://bootsnipp.com/snippets/qrmK0

// const Login = () =>

//   <p>Login/Register Placeholder. Will use this code example reference from https://bootsnipp.com/snippets/qrmK0
//   </p>

// ============ Modified Login Component with Class ==============
class Login extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleRegister = event => {
    event.preventDefault();
    console.log("Handling register..Login.js");
      API.registerAccount({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
        // .then(res => console.log("you have registered!"))
        .then(res => window.location = '/Login')
        .catch(err => console.log(err));
    }

  handleLogin = event => {
    event.preventDefault();
    console.log("Handling login..Login.js");
      API.loginAccount({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => console.log("res..Login.js: " + res))
        .then(res => window.location = '/Dashboard')
        // .then(res => API.getAccounts())
        .catch(err => console.log(err));
  };

  render(){
    return (
      <Container fluid>
        <Row fluid>
          <Col size="md-6 md-offset-3">
            <div className="panel panel-login">
              {/* Panel Heading */}
              <div className="panel-heading">
                <Row fluid>
                  <Col size="xs-6">
                    <a href="/login" className="active" id="login-form-link">Login</a>
                  </Col>
                  <Col size="xs-6">
                    <a href="/register" id="register-form-link">Register</a>
                  </Col>
                </Row>
                <hr />
              </div>
              {/* End of Panel Heading */}

              {/* Panel Body */}
              <div className="panel-body">
                <Row fluid>
                  <Col size="lg-12">

                    {/* Login Form */}

                    <form id="login-form" style={{ display: 'block'}} >
                        <Input type="text" name="username" id="username" tabIndex="1" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required></Input>
                        <Input type="password" name="password" id="password" tabIndex="2" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required></Input>
         
                        <Input type="checkbox" tabIndex="3" className="" name="remember" id="remember"></Input>
                        <label for="remember">Remember Me</label>
                        <Row fluid>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                            type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" 
                              value="Log In" onClick={this.handleLogin}>Log In
                            </FormBtn>
                          </Col>
                        </Row>
                  
                        <Row fluid>
                          <Col size="lg-12" className="text-center">
                          <a href="" tabIndex="5" className="forgot-password">Forgot Password?</a>
                          </Col>
                        </Row>
                    </form>

                    {/* Register Form */}

                    <form id="register-form" style={{display:'none'}}>
                        <Input 
                        type="text" name="username" id="username" tabIndex="1" placeholder="Username" 
                          value={this.state.username} onChange={this.handleInputChange} required>
                        </Input>
                        <Input 
                        type="email" name="email" id="email" tabIndex="1" placeholder="Email Address" 
                          value={this.state.email} onChange={this.handleInputChange} required>
                        </Input>
                        <Input type="password" name="password" id="password" tabIndex="2" placeholder="Password" 
                           value={this.state.password} onChange={this.handleInputChange} required>
                        </Input>
                        <Input type="password" name="passwordConfirm" id="confirm-password" tabIndex="2" placeholder="Confirm Password" 
                          value={this.state.passwordConfirm} onChange={this.handleInputChange} required>
                        </Input>
                        <Row fluid>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                            type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" 
                              value="Register Now" onClick={this.handleRegister}>Register
                            </FormBtn>
                          </Col>
                        </Row>
                    </form>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>


      {/* Placeholder Links After Logging In */}

        <Row fluid>
            {/* Links after users logging in */}

            <div className="button groups" style={{position: 'absolute', top: '400px', height: '300px'}}>
            <h3>Links after users logging in, will remove later!!!</h3>
                <ul>
                    <li><a href="/customers">Customers</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                </ul>
            </div>
        </Row>



      </Container>
    );
  }
}

export default Login;
