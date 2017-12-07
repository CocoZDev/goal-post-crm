import 'rc-time-picker/assets/index.css';
import React, { Component } from "react";
import "../Form/DataForm.css";
import DeleteBtn from "../../components/DeleteBtn";		
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";		
import API from "../../utils/calAPI.js";
import PubSub from 'pubsub-js';
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import moment from 'moment';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}


class CalForm extends Component {
  state = {
    events: [],
    event_title: '',
    start_time: '',
    end_time: '', 
    note: ''
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.event_title && this.state.start_time) {
      API.saveEvent({
        event_title: this.state.event_title,
        start_time: this.state.start_time,
        end_time: this.state.end_time, 
        note: this.state.note,
        repRepId: localStorage.getItem('rep_id')
      })
      .then(res => {
          console.log("res from post..CalForm", res)
          PubSub.publish('UPDATE_LIST', 'update Now!');
        })
      .catch(err => console.log(err));
    }

    this.setState({
      event_title: '',
      start_time: '',
      end_time: '', 
      note: ''
    });
    
  };

  render () {
    return (
      <Row>
        <Col size="md-12 sm-12">
          <form className="form-form-horizontal DataForm" ref="form">
            <h2>Enter event information below:</h2>
            <Col size="md-4 sm-4">
              <Input
              value={this.state.event_title}
              onChange={this.handleInputChange}
              name="event_title"
              placeholder="Event Title *"
              required
            />
            </Col>
            <Col size="md-4 sm-4">
              <TimePicker
                showSecond={false}
                defaultValue={now}
                value={this.state.start_time}
                className="xxx"
                onChange={onChange}
                name="start_time"
                format={format}
                placeholder="11:00am"
                use12Hours
                required
                />
            </Col>
            <Col size="md-4 sm-4">
            <TimePicker
                showSecond={false}
                defaultValue={now}
                value={this.state.end_time}
                className="xxx"
                onChange={onChange}
                name="end_time"
                format={format}
                placeholder="11:30am"
                use12Hours
                required
                />
            </Col>
            <Col size="md-6 sm-6">
              <Input
              value={this.state.note}
              onChange={this.handleInputChange}
              name="note"
              placeholder="Note"
            />
            </Col>
            <FormBtn
            disabled={!(this.state.event_title && this.state.start_time)}
            onClick={this.handleFormSubmit}
            >
              Add to Calendar
            </FormBtn>
          </form>
        </Col>
      </Row>
  );
}
}

export default CalForm;