import React, {Component} from 'react';
import {Modal, Row, Col} from 'antd';

class basisQuizModal extends Component {
    constructor(props) {
        super(props);
    }

    handleOk() {
        this.props.handleOk()
    }

    handleCancel() {
        this.props.handleCancel()
    }

    render() {
        const {visible} = this.props;

        return (
            <Modal
                title="新建主题"
                visible={visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}>
                <Row>
                    <Col span={6}>hh</Col>
                    <Col span={6}>ff</Col>
                    <Col span={6}>ff</Col>
                    <Col span={6}>ff</Col>
                </Row>
            </Modal>
        )
    }
}

export default basisQuizModal;
