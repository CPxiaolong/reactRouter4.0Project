import React, { Component } from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar/Calendar';
import Carousel from './pages/Carousel/Carousel';
import Modal from './pages/Modal/Modal';
import './App.css';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" render={({history,location,match}) => (
                        <Home history={history} location={location} match={location}>
                            <Route path="/calendar" exact component={Calendar} />
                            <Route path="/carousel" exact component={Carousel} />
                            <Route path="/Modal" exact component={Modal} />
                        </Home>
                    )}/>
                    <Redirect from="/home" to="/"/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;

