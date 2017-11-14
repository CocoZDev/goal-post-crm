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
    if ((this.state.username && this.state.password && this.state.passwordTwo) && (this.state.password === this.state.passwordConfirm)) {
      API.registerAccount({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
        .then(res => this.getAccounts())
        .catch(err => console.log(err));
    }
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.loginAccount({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.getAccounts())
        .catch(err => console.log(err));
    }
  };

  render(){
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 md-offset-3">
            <div className="panel panel-login">
              {/* Panel Heading */}
              <div className="panel-heading">
                <Row>
                  <Col size="xs-6">
                    <a href="#" className="active" id="login-form-link">Login</a>
                  </Col>
                  <Col size="xs-6">
                    <a href="#" id="register-form-link">Register</a>
                  </Col>
                </Row>
                <hr />
              </div>
              {/* End of Panel Heading */}

              {/* Panel Body */}
              <div className="panel-body">
                <Row>
                  <Col size="lg-12">

                    {/* Login Form */}

                    <form id="login-form" role="form" style={{ display: 'block'}} >
                        <Input type="text" name="username" id="username" tabindex="1" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required></Input>
                        <Input type="password" name="password" id="password" tabindex="2" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required></Input>
         
                        <Input type="checkbox" tabindex="3" className="" name="remember" id="remember"></Input>
                        <label for="remember">Remember Me</label>
                        <Row>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                              type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" 
                              value="Log In" onClick={this.handleLogin}>Log In
                            </FormBtn>
                          </Col>
                        </Row>
                  
                        <Row>
                          <Col size="lg-12" className="text-center">
                              <a href="" tabindex="5" className="forgot-password">Forgot Password?</a>
                          </Col>
                        </Row>
                    </form>

                    {/* Register Form */}

                    <form id="register-form" role="form" style={{display:'none'}}>
                        <Input 
                          type="text" name="username" id="username" tabindex="1" placeholder="Username" 
                          value={this.state.username} onChange={this.handleInputChange} required>
                        </Input>
                        <Input 
                          type="email" name="email" id="email" tabindex="1" placeholder="Email Address" 
                          value={this.state.email} onChange={this.handleInputChange} required>
                        </Input>
                        <Input type="password" name="password" id="password" tabindex="2" placeholder="Password" 
                           value={this.state.password} onChange={this.handleInputChange} required>
                        </Input>
                        <Input type="password" name="confirm-password" id="confirm-password" tabindex="2" placeholder="Confirm Password" 
                          value={this.state.passwordConnfirm} onChange={this.handleInputChange} required>
                        </Input>
                        <Row>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                              type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" 
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
      </Container>
    );
  }
}

export default Login;
