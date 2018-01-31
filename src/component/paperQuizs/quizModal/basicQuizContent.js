import React, {Component} from 'react';
import {Row, Col, Radio, Input, Checkbox} from 'antd';
import '../../../style/basicQuizModal.less';

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const TextArea = Input.TextArea;

class basisQuizContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizType: '',
            description: ''
        };
    }

    handleInput(quizType, e) {
        let value = {};
        const {description} = this.state;
        if (quizType === '' || description === '') {
            this.props.getQuizData({});
            return;
        }
        if (quizType === 'blank') {
            value = {
                "type": "blank",
                "title": description,
                "stack": "填空题",
                "answer": e.target.value
            }
        } else if (quizType === 'radio') {
            value = {
                "type": "radio",
                "title": description,
                "stack": "单选题",
                "options": [
                    "a",
                    "b",
                    "c",
                    "d"
                ],
                "answer": "a"
            }
        } else if (quizType === 'checkbox') {
            value = {
                "type": "multipleChoice",
                "title": description,
                "stack": "多选题",
                "options": [
                    "a",
                    "b",
                    "c",
                    "d"
                ],
                "answer": [
                    "a",
                    "b"
                ]
            }
        }
        this.props.getQuizData(value);
    }

    selectQuizType(e) {
        const {value} = e.target || '';
        this.setState({
            quizType: value,
            description: ''
        });
    }

    handleTextArea(e) {
        const {value} = e.target || '';
        this.setState({
            description: value
        });
    }

    renderBasicQuiz(quizType) {
        if (quizType === 'blank') {
            return <div className="blank">
                <Row>
                    <Col span={3} offset={2}>答案</Col>
                    <Col span={16}>
                        <Input placeholder="答案" onChange={this.handleInput.bind(this, quizType)}/>
                    </Col>
                </Row>
            </div>
        } else if (quizType === 'radio') {
            return <div className="radio">
                <Row>
                    <Col span={3} offset={2}>选项</Col>
                    <Col span={16}>
                        <RadioGroup name="radioGroup"
                                    onChange={this.handleInput.bind(this, quizType)}
                                    className="options">
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
        } else if (quizType === 'checkbox') {
            return <div className="checkbox">
                <Row>
                    <Col span={3} offset={2}>选项</Col>
                    <Col span={16}>
                        <CheckboxGroup onChange={this.handleInput.bind(this, quizType)}>
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
                        </CheckboxGroup>
                    </Col>
                </Row>
            </div>
        }
        return '';
    }

    render() {
        const {quizType} = this.state;
        return (
            <div>
                <div>
                    <RadioGroup name="radioGroup" onChange={this.selectQuizType.bind(this)} value={quizType}>
                        <Radio value="blank">填空题</Radio>
                        <Radio value="radio">单选题</Radio>
                        <Radio value="checkbox">多选题</Radio>
                    </RadioGroup>
                </div>
                <Row>
                    <Col span={3} offset={2}>描述</Col>
                    <Col span={16}>
                        <TextArea placeholder="描述" onChange={this.handleTextArea.bind(this)}/>
                    </Col>
                </Row>

                <div>
                    {
                        this.renderBasicQuiz(quizType)
                    }
                </div>
            </div>
        )
    }
}

export default basisQuizContent;
