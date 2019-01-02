import React from 'react';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

export default class ModalDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handlerToggle() {
        this.setState(pre => {
            return {
                visible: !pre.visible
            }
        })
    }
    
    handleOk() {
        console.log('点击了ok')
    }

    handleCancel() {
        console.log('点击了取消')
        this.setState({
            visible: false
        })
    }

    handleShow() {
        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <div>
                <Modal
                    title = '标题'
                    visible = {this.state.visible}
                    onOk = {this.handleOk}
                    onCancel = {this.handleCancel}
                >
                    <div>用来显示的 modalbody</div>
                </Modal>
                <Button type = 'primary' onClick = {this.handleShow}>弹出</Button>
            </div>
        )
    }
}