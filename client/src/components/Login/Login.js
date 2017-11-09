import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
// import Jumbotron from "../Jumbotron";



// Code Reference from https://bootsnipp.com/snippets/featured/loginregister-in-tabbed-interface

// const Login = () =>


//   <p>Login/Register Placeholder. Will use this code example reference from https://bootsnipp.com/snippets/featured/loginregister-in-tabbed-interface
//   </p>

// ============ Modified Login Component with Class ==============
class Login extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
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
          <Col size="lg-6 lg-offset-3 md-6 md-offset-3 sm-6 sm-offset-3">
            <div id="myTabContent" className="tab-content text-center" style={{width:'300px'}}>
              {/* ===== Login ===== */}
              <div className="tab-pane active in" id="login">
                <form className="form-horizontal" action='' method="POST">
                  <fieldset>
                    <div id="legend">
                      <legend className="">Login</legend>
                    </div>    
                    <div className="control-group">
                      {/* <!-- Username --> */}
                      <label className="control-label"  for="username">Username</label>
                      <div className="controls">
                        <Input 
                          type="text" 
                          id="username" 
                          name="username" 
                          placeholder="" 
                          value={this.state.username}
                          onChange={this.handleInputChange}>
                        </Input>
                      </div>
                    </div>

                    <div className="control-group">
                      {/* <!-- Password--> */}
                      <label className="control-label" for="password">Password</label>
                      <div className="controls">
                        <Input 
                          type="password" 
                          id="password"
                          name="password" 
                          placeholder=""
                          value={this.state.password}
                          onChange={this.handleInputChange}>
                        </Input>
                      </div>
                    </div>


                    <div className="control-group">
                      {/* <!-- Button --> */}
                      <div className="controls">
                        <button className="btn btn-success">Login</button>
                      </div>
                    </div>
                  </fieldset>
                </form>                
              </div>

              {/* ===== Create New Account ===== */}

              <div className="tab-pane fade" id="create">
                <form id="tab">
                  <label>Username</label>
                  <Input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleInputChange}>
                  </Input>
                  <label>First Name</label>
                  <Input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={this.handleInputChange}>
                  </Input>
                  <label>Last Name</label>
                  <Input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={this.handleInputChange}>
                  </Input>
                  <label>Email</label>
                  <Input 
                    type="text" 
                    value={this.state.email}
                    onChange={this.handleInputChange}>
                  </Input>

                  <div>
                    <FormBtn>Create Account</FormBtn>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          </Row>
        </Container>
      );
    }
  }

export default Login;
