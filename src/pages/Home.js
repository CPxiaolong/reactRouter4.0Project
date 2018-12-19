import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
            <div>
                <div>
                    <NavLink to="/calendar" activeClassName="selected"> calendar </NavLink>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
} 