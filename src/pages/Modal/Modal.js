import React, {Component} from 'react';
import Dialog from '../../components/Dialog/Dialog'
import PropTypes from 'prop-types';

export default class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool   
    }
    static defaultProps = {
        visible: false
    }
    render() {

        return <Dialog><div>1234</div></Dialog>
    }
}