import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.use.less';

export default class Dialog extends Component {
    static defaultProps = {
        visible: false
    }

    componentWillMount() {
        style.use()
    }


    componentDidMount(){//新建一个div标签并塞进body
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
        if (this.isModalVisible) {
            this.popup = document.createElement("div");
            this.popup.className = 'Dialog'
            document.body.appendChild(this.popup);
            ReactDom.render(this.props.children, this.popup);
        }
    }

    get isModalVisible() {
        return this.props.visible
    }

    render() {
        return null;
    }
}