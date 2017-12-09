import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import calAPI from "../../utils/calAPI";
import PubSub from 'pubsub-js';
import DeleteBtn from "../../components/DeleteBtn";
import { TableContainerCal, TableRow} from "../Table";
import "../Table/Table.css";

class CalTable extends Component {
    state = {
        events: []
    };

    componentWillMount() {
        this.token = PubSub.subscribe('UPDATE_LIST',this.loadEvents.bind(this));
    }
    componentDidMount() {
        this.loadEvents();
        PubSub.publish('UPDATE_LIST', this.token)
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
      }

    loadEvents = () => {
        
        calAPI.getEvents({
            repRepId: localStorage.getItem('rep_id')
        })
        .then(res => {
            console.log(res);
            this.setState({ events: res.data })
        }
        )
        .catch(err => console.log(err));
    };

    deleteEvent = id => {
        calAPI.deleteEvent(id)
          .then(res => this.loadEvents())
          .catch(err => console.log(err));
      };
   
    render() {
        return (
            <div>
            <Row>
                <Col size="md-12 sm-12">
                    <div className='private text-center event-table'>
                        {this.state.events.length ? (
                       <TableContainerCal>
                        {this.state.events.map(event => (
                            <TableRow key={event.calendar_id}>
                                <td className="col-md-1">{event.event_title}</td>
                                <td className="col-md-1">{event.date}</td>
                                <td className="col-md-1">{event.start_time}</td>
                                <td className="col-md-2">{event.end_time}</td>
                                <td className="col-md-1">{event.note}</td>
                                <td className="col-md-1">{event.createdAt}</td>

                                </TableRow>
                                ))}
                                </TableContainerCal>
                                ) : (
                            <h3>No Results to Display</h3>
                            )}
                    </div>
                </Col>
            </Row>
            </div>

        );
    }
}

export default CalTable;