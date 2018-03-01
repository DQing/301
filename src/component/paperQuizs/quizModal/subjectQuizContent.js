import React, {Component} from 'react';
import {Row, Col, Input} from 'antd';

const {TextArea} = Input;

class subjectQuizContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentWillMount(){
        const {isModify, result} = this.props;
        this.setState({
            inputValue: isModify ? result.title : ''
        });
    }

    handleInput(e) {
        const {value} = e.target || '';
        const quiz =     {
            title: value,
            stack: '主观题'
        };
        this.setState({
            inputValue: value
        });
        this.props.getQuizData(quiz);
    }

    render() {

        return (
            <Row>
                <Col span={2} offset={2}>描述</Col>
                <Col span={18}>
                    <TextArea placeholder="描述"
                              value={this.state.inputValue}
                              onChange={this.handleInput.bind(this)}/>
                </Col>
            </Row>
        )
    }
}

export default subjectQuizContent;
