import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
import "../../styles/Login.css";
import API from "../../utils/API";
import decode from 'jwt-decode';


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
        .then(res => {
          console.log("res..Login.js: ", res.data.token, this.props);
          // set token to local storage
          localStorage.setItem('token', res.data.token);
          // get dashboard component
          this.props.history.replace('/dashboard');
          // decode token
          const decoded = decode(res.data.token);
          var sub = decoded.sub;
          console.log("decoded token giving rep_id and timestamp: ", decoded);
          API.getAccounts({
            username: this.state.username,
            repRepId: 5
          }).then(res => {
            console.log("getAccounts response: ", res.data)
          })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  };

  render(){
    return (
      <Container fluid>
        <Row fluid>
          <Col size="md-6 md-offset-3 sm-6 sm-offset-3">
            <div className="panel panel-login">
              {/* Panel Heading */}
              <div className="panel-heading">
                <Row fluid>
                  <Col size="md-6 sm-6">
                    <a href="/login" className="active" id="login-form-link">Login</a>
                  </Col>
                  <Col size="md-6 sm-6">
                    <a href="/register" id="register-form-link">Register</a>
                  </Col>
                </Row>
                {/* <hr /> */}
              </div>
              {/* End of Panel Heading */}

              {/* Panel Body */}
              <div className="panel-body">
                <Row fluid>
                  <Col size="md-12 sm-12">

                    {/* Login Form */}

                    <form id="login-form" style={{ display: 'block'}} >
                        <Input type="text" name="username" id="username" tabIndex="1" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required></Input>
                        <Input type="password" name="password" id="password" tabIndex="2" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required></Input>
         
                        {/* <Input type="checkbox" tabIndex="3" className="" name="remember" id="remember"></Input>
                        <label for="remember">Remember Me</label> */}
                        <Row fluid>
                          <Col size="md-6 md-offset-3 sm-6 sm-offset-3">
                            <FormBtn 
                            type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" 
                              value="Log In" onClick={this.handleLogin}>Log In
                            </FormBtn>
                          </Col>
                        </Row>
                  
                        {/* <Row fluid>
                          <Col size="md-12 sm-12" className="text-center">
                          <a href="" tabIndex="5" className="forgot-password">Forgot Password?</a>
                          </Col>
                        </Row> */}
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
                          <Col size="md-6 md-offset-3 sm-6 sm-offset-3">
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
          <Col size="md-12 sm-12">
            <div className="button groups" style={{position: 'relative', 'paddingBottom': '300px' }}>
            <h3>Links after users logging in, will remove later!!!</h3>
              <Col size="md-4 md-offset-4 sm-4 sm-offset-4">
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/customers">Customers</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                </ul>
              </Col>
            </div>
          </Col>
        </Row>



      </Container>
    );
  }
}

export default Login;
