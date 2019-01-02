import React, {Component} from 'react';
import Dialog from '../Dialog/Dialog';
import PropTypes from 'prop-types';
import style from './style.use.less';
import Button from '../../components/Button/Button';

export default class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        /**
         * header标题
         */
        title: PropTypes.string,
        /**
         * 确定按钮回调
         */
        onOk: PropTypes.func,
        /**
         * 取消按钮回调
         */
        onCancel: PropTypes.func
    }
    static defaultProps = {
        title: '',
        visible: false
    }
    constructor(props) {
        super(props)
        this.state = {
           // visible: false
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        style.use();
    }

    componentWillUnmount() {
        style.unuse();
    }

    handleOk() {
        if (this.props.onOk) {
            this.props.onOk()
        } 
    }

    handleCancel() {
        if (this.props.onCancel) {
            this.props.onCancel()
        } 
    }

    render() {

        return <div>
            <Dialog visible = {this.props.visible}>
                <div className = 'modal-container'>
                    <div className = 'modal-header'>
                        <div className = 'modal-header-message'>{this.props.title}</div>
                        <span className = 'modal-close' onClick = {this.handleCancel}>X</span>
                    </div>
                    <div className = 'modal-body'>
                        {this.props.children}
                    </div>
                    <div className = 'modal-footer'>
                        <Button onClick = {this.handleCancel}>取消</Button>
                        <Button type = 'primary'  onClick = {this.handleOk}>确定</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    }
}