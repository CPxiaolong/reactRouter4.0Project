import React, {Component} from 'react';
import Modal from '../../components/Modal/Modal'
import PropTypes from 'prop-types';

export default class ModalDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this.handlerToggle = this.handlerToggle.bind(this);
    }

    handlerToggle() {
        this.setState(pre => {
            return {
                visible: !pre.visible
            }
        })
    }

    render() {
        return <Modal></Modal>
    }
}