import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import style from './style.less'

export default class Home extends Component {
    render() {
        return(
            <div>
                <div className = 'link-box'>
                    <NavLink to="/calendar" activeClassName="selected"> calendar </NavLink>
                    <NavLink to="/carousel" activeClassName="selected"> 轮播 </NavLink>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
} 