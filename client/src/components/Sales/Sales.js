import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";


class Sales extends Component {
  //  componentDidMount() {
  //   $('.mask-money').mask('00.00', {
  //     reverse: false
  //   });
  //  }
  
    render(){
      return (
        <Container fluid>
          <Row fluid>
            <Col size="md-6 md-offset-3 sm-6 sm-offset-3">
            <form>  
  <div class="form-group">
    <label for="exampleFormControlSelect1">Customers</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Snoop Dog</option>
      <option>Tom Petty</option>
      <option>Willie Nelson</option>
      <option>Bob Marley</option>
      <option>Jerry Garcia</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Products</label>
    <select class="form-control" id="exampleFormControlSelect2">
      <option>THC Drink</option>
      <option>Bread Loaf</option>
      <option>Gold Caps</option>
      <option>Cheesecake Decadence Bar</option>
      <option>Cannabis Granola</option>
    </select>
  </div>
  <label for="exampleFormControlSelect1">Sale Amount</label>
  <div class="input-group">  
   <span class="input-group-addon">$</span>  
   <input type="text" class="form-control" id="decimalPoint"  placeholder="Price"/>      
  </div>
  <div class="outer-money-div">
  <br/>
   <label for="exampleFormControlSelect1">Quantity</label>
    <div class="input-group">  
     <span class="input-group-addon"></span>  
     <input type="text" class="form-control"  placeholder="Number of items"/>      
    </div>
  </div>
  <div>
    <br/>
  <button type="button" class="btn btn-primary btn-lg">Submit</button>
  </div>
</form>
            </Col>
          </Row>
  
  
  
        </Container>
      );
    }
  }
  
  export default Sales;