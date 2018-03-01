import React, {Component} from 'react';
import {Row, Col, Radio, Input, Checkbox} from 'antd';
import '../../../style/basicQuizContent.less';
import index from "../../../reducers/index";

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const TextArea = Input.TextArea;

class basisQuizContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizType: '',
            description: '',
            answer: '',
            options: [],
            checkedList: [],
        };
    }

    handleInput(quizType, e) {
        let value = {};
        const {description, options} = this.state;
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
            };
            this.setState({
                answer: e.target.value
            })
        } else if (quizType === 'radio') {
            value = {
                "type": "radio",
                "title": description,
                "stack": "单选题",
                "options": options,
                "answer": e.target.value
            };
            this.setState({
                answer: e.target.value,
            })
        } else if (quizType === 'checkbox') {
            value = {
                "type": "checkbox",
                "title": description,
                "stack": "多选题",
                "options": options,
                "answer": e
            };
            this.setState({
                checkedList: e
            })
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
        const description = e.target.value || '';
        const {quizType, answer, options, checkedList} = this.state;
        this.setState({
            description: description
        });

        let value = {};

        if (quizType === '' || description === '') {
            this.props.getQuizData({});
            return;
        }
        if (quizType === 'blank') {
            value = {
                "type": "blank",
                "title": description,
                "stack": "填空题",
                "answer": answer
            };
        } else if (quizType === 'radio') {
            value = {
                "type": "radio",
                "title": description,
                "stack": "单选题",
                "options": options,
                "answer": answer
            }
        } else if (quizType === 'checkbox') {
            value = {
                "type": "checkbox",
                "title": description,
                "stack": "多选题",
                "options": options,
                "answer": checkedList
            }
        }
        this.props.getQuizData(value);
    }

    componentDidMount() {
        const {isModify, result} = this.props;
        debugger
        if (isModify) {
            this.setState({
                quizType: result.type,
                description: result.title,
                answer: result.answer,
                checkedList: result.answer,
                options: result.options
            });
        }

    }

    handleOptions(index, e) {
        const value = e.target.value || '';
        let options = this.state.options;
        const {isModify} = this.props;
        if (isModify) {
            options[index] = value;
        }
        options.push(value);
        this.setState({
            options: options
        });
    }

    renderBasicQuiz(quizType) {
        const optionsValue = ['a', 'b', 'c', 'd'];
        if (quizType === 'blank') {
            return <div className="blank">
                <Row>
                    <Col span={3} offset={2}>答案</Col>
                    <Col span={16}>
                        <Input placeholder="答案" value={this.state.answer}
                               onChange={this.handleInput.bind(this, quizType)}/>
                    </Col>
                </Row>
            </div>
        } else if (quizType === 'radio') {
            return <div className="radio">
                <Row>
                    <Col span={3} offset={2}>选项</Col>
                    <Col span={16}>
                        <RadioGroup name="radioGroup"
                                    value={this.state.answer}
                                    onChange={this.handleInput.bind(this, quizType)}
                                    className="options">
                            {
                                optionsValue.map((item, index) => {
                                    return <Radio value={item}>
                                        <Input placeholder="选项描述" onChange={this.handleOptions.bind(this, index)}
                                               value={this.state.options[index]}/>
                                    </Radio>
                                })
                            }
                        </RadioGroup>
                    </Col>
                </Row>
            </div>
        } else if (quizType === 'checkbox') {
            return <div className="checkbox">
                <Row>
                    <Col span={3} offset={2}>选项</Col>
                    <Col span={16}>
                        <CheckboxGroup value={this.state.checkedList} onChange={this.handleInput.bind(this, quizType)}>
                            {
                                optionsValue.map((item, index) => {
                                    return <Checkbox value={item}>
                                        <Input placeholder="选项描述" onChange={this.handleOptions.bind(this, index)}/>
                                    </Checkbox>
                                })
                            }
                        </CheckboxGroup>
                    </Col>
                </Row>
            </div>
        }
        return '';
    }

    render() {
        const {quizType, description} = this.state;
        return (
            <div className="basicQuizContent">
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
                        <TextArea placeholder="描述" value={description}
                                  onChange={this.handleTextArea.bind(this)}/>
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
