import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import style from './style.use.less';

export default class Dialog extends React.Component {
    static propTypes = {
        visible: PropTypes.bool   
    }

    static defaultProps = {
        visible: false
    }

    constructor(props) {
        super(props);
        this.removePopup = this.removePopup.bind(this);
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
        this.removePopup()
    }

    renderComponent() {
        if (this.isModalVisible) {
            this.popup = document.createElement("div");
            this.popup.className = 'Dialog'
            document.body.appendChild(this.popup);
            ReactDom.render(this.props.children, this.popup);
        } else {
            this.removePopup()
        }
    }

    removePopup() {
        if (this.popup) {
            ReactDom.unmountComponentAtNode(this.popup);
            document.body.removeChild(this.popup);
            this.popup = null
        }
    }

    get isModalVisible() {
        return this.props.visible
    }

    render() {
        return null;
    }
}