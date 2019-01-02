import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.use.less';

export default class Dialog extends Component {
    static propTypes = {
        type: PropTypes.string, 
        onClick: PropTypes.func 
    }

    static defaultProps = {
        
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        style.use()
    }

    componentWillUnmount() {
        style.unuse()
    }
    getClassName(type) {
        let ClassMap = {
            primary: 'cp-btn-primary'
        }
        return ClassMap[type] ? ClassMap[type] : '';
    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick()
        }    
    }

    render() {
        return (
            <button className = {`cp-btn ${this.getClassName(this.props.type)}`} onClick = {this.handleClick}>
                {this.props.children}
            </button>
        )
    }
}