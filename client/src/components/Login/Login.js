import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
import "../../styles/Login.css";



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

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render(){
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 md-offset-3">
            <div class="panel panel-login">
              {/* Panel Heading */}
              <div class="panel-heading">
                <Row>
                  <Col size="xs-6">
                    <a href="#" class="active" id="login-form-link">Login</a>
                  </Col>
                  <Col size="xs-6">
                    <a href="#" id="register-form-link">Register</a>
                  </Col>
                </Row>
                <hr />
              </div>
              {/* End of Panel Heading */}

              {/* Panel Body */}
              <div class="panel-body">
                <Row>
                  <Col size="lg-12">

                    {/* Login Form */}

                    <form id="login-form" action="" method="post" role="form" style={{ display: 'block'}} >
                        <Input type="text" name="username" id="username" tabindex="1" placeholder="Username"                 value={this.state.author}                 onChange={this.handleInputChange}></Input>
                        <Input type="password" name="password" id="password" tabindex="2" placeholder="Password"></Input>
         
                        <Input type="checkbox" tabindex="3" class="" name="remember" id="remember"></Input>
                        <label for="remember"> Remember Me</label>
                        <Row>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                              type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" 
                              value="Log In" onChange={this.handleFormSubmit}>Log In
                            </FormBtn>
                          </Col>
                        </Row>
                  
                        <Row>
                          <Col size="lg-12" class="text-center">
                              <a href="" tabindex="5" class="forgot-password">Forgot Password?</a>
                          </Col>
                        </Row>
                    </form>

                    {/* Register Form */}

                    <form id="register-form" action="" method="post" role="form" style={{display:'none'}}>
                        <Input 
                          type="text" name="username" id="username" tabindex="1" placeholder="Username" 
                          value={this.state.author} onChange={this.handleInputChange}>
                        </Input>
                        <Input 
                          type="email" name="email" id="email" tabindex="1" placeholder="Email Address" 
                          value={this.state.author} onChange={this.handleInputChange}>
                        </Input>
                        <Input type="password" name="password" id="password" tabindex="2" placeholder="Password"></Input>
                        <Input type="password" name="confirm-password" id="confirm-password" tabindex="2" placeholder="Confirm Password"></Input>
                        <Row>
                          <Col size="sm-6 sm-offset-3">
                            <FormBtn 
                              type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" 
                              value="Register Now" onChange={this.handleFormSubmit}>Register
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
