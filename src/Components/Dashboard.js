import React, { Component } from 'react';

import '../Styles/dashboard.css';
import { Col, Row, Container } from 'react-bootstrap';

import WidgetText from './widgetText'; 

class Dashboard extends Component {
    render() {
        return (
            <div>
                <WidgetText title="title" value={100} description="some text"/>
                <WidgetText title="title" value={100} description="some text"/>
                <WidgetText title="title" value={100} description="some text"/>
                <WidgetText title="title" value={100} description="some text"/>
                <WidgetText title="title" value={100} description="some text"/>
            </div>
        )
    }
}

export default Dashboard;