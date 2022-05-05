import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import NotFound from './NotFound';
import Header from '../Layout/Header'
import Upload from './Upload';
import History from './History';
import Persons from './Persons'
import IP from "./IP"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Header/>
                        <div className='container'>
                            <Switch>
                                <Route exact path="/" component={History} />
                                <Route exact path="/History" component={History} />
                                <Route exact path="/Chamcong" component={IP} />
                                <Route exact path="/Lichtruc" component={Upload} />
                                <Route exact path="/Nhansu" component={Persons} />
                                <Route exact path= "*" component={NotFound}></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
