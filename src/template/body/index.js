import React, { Component } from 'react';
import {Login,Register} from '../../page';
import Home from '../home';
import { Switch, Route } from "react-router-dom";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Switch>
                <Route path="/" exact component={props => <Login {...props} />} />
                <Route path="/home" component={props => <Home {...props} />} />
                <Route path="/register" component={props => <Register {...props} />} />
            </Switch>
            
        );
    }
}

export default Body;