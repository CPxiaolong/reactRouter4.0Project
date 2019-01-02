import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <div className = 'link-box'>
                    <NavLink to="/calendar" activeClassName="selected"> calendar </NavLink>
                    <NavLink to="/carousel" activeClassName="selected"> 轮播 </NavLink>
                    <NavLink to="/Modal" activeClassName="selected"> modal弹出层 </NavLink>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
} 