import React, {Component} from 'react';
import {Modal, Row, Col, Radio, Input, Checkbox} from 'antd';
import '../../../style/basicQuizModal.less';

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const TextArea = Input.TextArea;

class basisQuizModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuiz: ''
        }
    }

    handleOk() {
        this.props.handleOk()
    }

    handleCancel() {
        this.props.handleCancel()
    }

    handleInput() {

    }

    render() {
        const {visible} = this.props;

        return (
            <Modal
                title="新建简单客观题"
                width="598px"
                visible={visible}
                onOk={this.handleOk.bind(this)}
                destroyOnClose={true}
                onCancel={this.handleCancel.bind(this)}>
                <div>
                    <RadioGroup name="radioGroup">
                        <Radio value="1">填空题</Radio>
                        <Radio value="2">单选题</Radio>
                        <Radio value="3">多选题</Radio>
                    </RadioGroup>
                </div>
                <Row>
                    <Col span={3} offset={2}>描述</Col>
                    <Col span={16}>
                        <TextArea placeholder="描述" onChange={this.handleInput.bind(this)}/>
                    </Col>
                </Row>

                <div>
                    <div className="blank">
                        <Row>
                            <Col span={3} offset={2}>答案</Col>
                            <Col span={16}>
                                <Input placeholder="描述" onChange={this.handleInput.bind(this)}/>
                            </Col>
                        </Row>
                    </div>
                    <div className="radio">
                        <Row>
                            <Col span={3} offset={2}>选项</Col>
                            <Col span={16}>
                                <RadioGroup name="radioGroup" className="options">
                                    <Radio value="1">
                                        <Input placeholder="选项描述"/>
                                    </Radio>
                                    <Radio value="2">
                                        <Input placeholder="选项描述"/>
                                    </Radio>
                                    <Radio value="3">
                                        <Input placeholder="选项描述"/>
                                    </Radio>
                                    <Radio value="4">
                                        <Input placeholder="选项描述"/>
                                    </Radio>
                                </RadioGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="checkbox">
                        <Row>
                            <Col span={3} offset={2}>选项</Col>
                            <Col span={16}>
                                <Checkbox value="1">
                                    <Input placeholder="选项描述"/>
                                </Checkbox>
                                <Checkbox value="2">
                                    <Input placeholder="选项描述"/>
                                </Checkbox>
                                <Checkbox value="3">
                                    <Input placeholder="选项描述"/>
                                </Checkbox>
                                <Checkbox value="4">
                                    <Input placeholder="选项描述"/>
                                </Checkbox>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default basisQuizModal;
