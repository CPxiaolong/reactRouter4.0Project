import React, {Component} from 'react';
import Dialog from '../Dialog/Dialog'
import PropTypes from 'prop-types';

export default class Modal extends Component {
    // static propTypes = {
    //     visible: PropTypes.bool   
    // }
    // static defaultProps = {
    //     visible: false
    // }
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

        return <div>
            <Dialog visible = {this.state.visible}><div onClick = {this.handlerToggle}>1234</div></Dialog>
            <div>{this.state.visible ? 'visible' : 'noVisible'}</div>
            <button onClick = {this.handlerToggle}>切换</button>
        </div>
    }
}