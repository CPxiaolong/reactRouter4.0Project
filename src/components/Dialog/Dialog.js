import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.use.less';

export default class Dialog extends Component {
    
    componentWillMount() {
        style.use()
    }


    componentDidMount(){//新建一个div标签并塞进body
        this.popup = document.createElement("div");
        this.popup.className = 'Dialog'
        document.body.appendChild(this.popup);
        this.renderComponent();
    }

    componentDidUpdate() {
        this.renderComponent();
    }

    componentWillUnmount() {
        style.unuse()
        ReactDom.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }

    renderComponent() {
        ReactDom.render(this.props.children, this.popup);
    }

    render() {
        return null;
    }
}